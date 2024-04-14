import asyncio
import websockets
import json

current_bids = {}

active_connections = set()


async def handler(websocket, path):

    active_connections.add(websocket)
    print(active_connections)

    async for message in websocket:
        data = json.loads(message)
        if data["action"] == "bid":
            item_id = data["item_id"]
            bid_amount = data["bid_amount"]
            current_bids[item_id] = bid_amount
            await asyncio.wait(
                [
                    conn.send(
                        json.dumps(
                            {
                                "action": "bid",
                                "item_id": item_id,
                                "bid_amount": current_bids[item_id],
                            }
                        )
                    )
                    for conn in active_connections
                ]
            )


async def main():
    async with websockets.serve(handler, "localhost", 8765):
        await asyncio.Future()


asyncio.run(main())
