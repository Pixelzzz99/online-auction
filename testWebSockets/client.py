import asyncio
import websockets
import json


async def send_bid(websocket, queue):
    while True:
        item_id = await get_input("Enter item id: ")
        if item_id.lower() == "exit":
            await queue.put(None)
            break

        bid_amount = await get_input("Enter bid amount: ")

        bid_data = {"action": "bid", "item_id": item_id, "bid_amount": bid_amount}

        await websocket.send(json.dumps(bid_data))
        print(f"Sent bid. Waiting for server response...")


async def get_input(prompt):
    loop = asyncio.get_running_loop()
    return await loop.run_in_executor(None, input, prompt)


async def listen_for_bids(websocket, queue):
    while True:
        try:
            response = await websocket.recv()
            print(f"Server response: {response}")
        except websockets.exceptions.ConnectionClosedOK:
            print("Server disconnected")
            break
        except Exception as e:
            print(f"Error: {e}")


async def main():
    async with websockets.connect("ws://localhost:8765") as websocket:
        queue = asyncio.Queue()
        await asyncio.gather(
            listen_for_bids(websocket, queue),
            send_bid(websocket, queue),
        )


asyncio.run(main())
