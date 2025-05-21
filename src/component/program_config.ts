import { AnchorProvider, Idl, Program, web3 } from "@project-serum/anchor";
import { Connection } from "@solana/web3.js";

export const idl: Idl = {
  version: "0.1.0",
  name: "phasionistar",
  instructions: [
    {
      name: "initializeEscrow",
      accounts: [
        { name: "escrowAccount", isMut: true, isSigner: true },
        { name: "client", isMut: true, isSigner: true },
        { name: "designer", isMut: false, isSigner: false },
        { name: "systemProgram", isMut: false, isSigner: false },
      ],
      args: [
        { name: "amount", type: "u64" },
        { name: "designId", type: "string" },
      ],
    },
    {
      name: "approveCompletion",
      accounts: [
        { name: "escrowAccount", isMut: true, isSigner: false },
        { name: "designer", isMut: true, isSigner: false },
      ],
      args: [],
    },
    {
      name: "confirmDelivery",
      accounts: [{ name: "escrowAccount", isMut: true, isSigner: false }],
      args: [],
    },
    {
      name: "raiseDispute",
      accounts: [{ name: "escrowAccount", isMut: true, isSigner: false }],
      args: [],
    },
    {
      name: "resolveDispute",
      accounts: [
        { name: "escrowAccount", isMut: true, isSigner: false },
        { name: "client", isMut: false, isSigner: false },
        { name: "designer", isMut: false, isSigner: false },
      ],
      args: [{ name: "winner", type: "publicKey" }],
    },
    {
      name: "timeoutFallback",
      accounts: [
        { name: "escrowAccount", isMut: true, isSigner: false },
        { name: "client", isMut: true, isSigner: false },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: "EscrowAccount",
      type: {
        kind: "struct",
        fields: [
          { name: "client", type: "publicKey" },
          { name: "designer", type: "publicKey" },
          { name: "amount", type: "u64" },
          { name: "status", type: { defined: "EscrowStatus" } },
          { name: "designId", type: "string" },
          { name: "createdAt", type: "i64" },
          { name: "timeout", type: "i64" },
        ],
      },
    },
  ],
  types: [
    {
      name: "EscrowStatus",
      type: {
        kind: "enum",
        variants: [
          { name: "Funded" },
          { name: "Delivered" },
          { name: "Completed" },
          { name: "Disputed" },
          { name: "Resolved" },
          { name: "TimeoutRefund" },
        ],
      },
    },
  ],
  events: [
    {
      name: "PaymentInitiated",
      fields: [
        { name: "client", type: "publicKey", index: false },
        { name: "designer", type: "publicKey", index: false },
        { name: "amount", type: "u64", index: false },
        { name: "designId", type: "string", index: false },
      ],
    },
    {
      name: "DeliveryConfirmed",
      fields: [
        { name: "client", type: "publicKey", index: false },
        { name: "designer", type: "publicKey", index: false },
      ],
    },
    {
      name: "FundsReleased",
      fields: [
        { name: "client", type: "publicKey", index: false },
        { name: "designer", type: "publicKey", index: false },
      ],
    },
    {
      name: "DisputeRaised",
      fields: [
        { name: "client", type: "publicKey", index: false },
        { name: "designer", type: "publicKey", index: false },
      ],
    },
    {
      name: "DisputeResolved",
      fields: [
        { name: "client", type: "publicKey", index: false },
        { name: "designer", type: "publicKey", index: false },
        { name: "winner", type: "publicKey", index: false },
      ],
    },
    {
      name: "TimeoutRefunded",
      fields: [
        { name: "client", type: "publicKey", index: false },
        { name: "designer", type: "publicKey", index: false },
      ],
    },
  ],
  errors: [
    {
      code: 6000,
      name: "InvalidStatus",
      msg: "Invalid escrow status for this operation.",
    },
    {
      code: 6001,
      name: "InvalidWinner",
      msg: "Invalid winner for dispute resolution.",
    },
    {
      code: 6002,
      name: "TimeoutNotReached",
      msg: "Timeout has not been reached.",
    },
  ],
};
// Create a connection to the Solana cluster
const connection = new Connection("https://api.devnet.solana.com", "confirmed");
// Create an Anchor provider
const provider = new AnchorProvider(connection, wallet as any, { commitment: "confirmed" });
// Create a wallet provider (replace with your wallet implementation)
const wallet = {
  publicKey: new web3.PublicKey("YourWalletPublicKeyHere"), // Replace with your wallet public key
  signTransaction: async (tx: web3.Transaction) => tx, // Replace with your wallet's signTransaction method
  signAllTransactions: async (txs: web3.Transaction[]) => txs, // Replace with your wallet's signAllTransactions method
};
export const PROGRAM_ID = "GNXtGLMhY5f4af5ixPvur7s1eCzkAeHpTBMTzB4XkRRk";
export const program = new Program(idl as any, PROGRAM_ID, provider);

