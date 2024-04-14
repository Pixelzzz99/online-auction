import json
import asyncio
import websockets


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
        )


asyncio.run(main())
