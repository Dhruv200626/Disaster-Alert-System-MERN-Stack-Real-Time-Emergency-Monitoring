import { io } from "socket.io-client";

const socket = io("https://disaster-errp.onrender.com/");

socket.on("connect", () => {
    console.log("✅ Connected:", socket.id);
});

export default socket;
