
import { Connection, PublicKey, Transaction, SystemProgram } from "@solana/web3.js";
import { Program, AnchorProvider, web3 } from "@project-serum/anchor";
import idl from "../idl/phasionistar_escrow.json"; // Import the IDL file

const programID = new PublicKey("YourProgramIDHere"); // Replace with your program ID
const network = "https://api.mainnet-beta.solana.com"; // Solana mainnet endpoint
const opts = { preflightCommitment: "processed" };

export const initializeEscrow = async (
  wallet: any,
  designerPubkey: string,
  amount: number,
  designId: string
) => {
  const connection = new Connection(network, opts.preflightCommitment);
  const provider = new AnchorProvider(connection, wallet, opts);
  const program = new Program(idl as any, programID, provider);

  const escrowAccount = web3.Keypair.generate();

  await program.rpc.initializeEscrow(new web3.BN(amount), designId, {
    accounts: {
      escrowAccount: escrowAccount.publicKey,
      client: provider.wallet.publicKey,
      designer: new PublicKey(designerPubkey),
      systemProgram: SystemProgram.programId,
    },
    signers: [escrowAccount],
  });

  return escrowAccount.publicKey.toString();
};