// @ts-nocheck
import { PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { PerpetualsClient } from '@/context/PerpProvider';
import { BN } from '@project-serum/anchor';
import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react';
import { useFetchProvider } from '@/hooks';
import { atom } from 'jotai'
import {
  TOKEN_PROGRAM_ID,
  ASSOCIATED_TOKEN_PROGRAM_ID
} from "@solana/spl-token"

export const data = atom<any>({
  solBalance: null,
  entryPriceandFee: {
    price: null,
    fee: null
  }
})

export function useFetchData() {
  const anchorWallet = useAnchorWallet()
  const { provider, network } = useFetchProvider()
  const {connection} = useConnection();
  const client = new PerpetualsClient(network, "ApxxRUyjGDPNp4VWV9CRfKa1WE37PoJLjjREupUD5Bvt", anchorWallet)

  const toTokenAmount = (uiAmount: number, decimals: number) => {
    return new BN(uiAmount * 10 ** decimals);
  }

  const fetchData = async () => {
    try {
      if (provider) {
        const pools: any = await client.getPools();
  
        const fetchBalance = await connection.getBalance(provider?.wallet.publicKey)
        const solBalance = fetchBalance / LAMPORTS_PER_SOL
  
        // const pool: any = await client.getPool("SLP-Pool");
        // console.log(pool, 'pool-------')
  
        // @ts-ignore
        // const positions = await client.getUserPositions(provider.wallet.publicKey);
        // console.log(positions, 'positions-------')
  
        const entryPriceandFee = await client.getEntryPriceAndFee(
          "SLP-Pool",
          new PublicKey("So11111111111111111111111111111111111111112"),
          toTokenAmount(1, 6),
          toTokenAmount(1, 6),
          "long"
        );
        console.log(entryPriceandFee.price.toString() * 0.000001, entryPriceandFee.fee.toString() * 0.000001, 'entryPriceandFee-------')

        return {
          solBalance: solBalance,
          entryPriceandFee: entryPriceandFee
        }
      }
      return {
        solBalance: null,
        entryPriceandFee: {
          price: null,
          fee: null
        }
      }
    } catch (error) {
      console.log('error: ', error)
    }
  }

  return {fetchData}
}

export const useFetchApprove = () => {
  const anchorWallet = useAnchorWallet()
  const { provider, network } = useFetchProvider()
  const client = new PerpetualsClient(network, "ApxxRUyjGDPNp4VWV9CRfKa1WE37PoJLjjREupUD5Bvt", anchorWallet)
  const openPosiition = async () => {
    try {
      if (provider) {
        const positionKey = await client.getPositionKey(
          provider.wallet.publicKey,
          "SLP-Pool",
          new PublicKey("So11111111111111111111111111111111111111112"),
          "long"
        )
        console.log(positionKey, 'positionKey-------')
        
      
        const custody = await client.generateCustody(9, "SLP-Pool")
        console.log(custody, 'custody-------')
      
        const oraclePrice = await client.getOraclePrice(
          "SLP-Pool",
          new PublicKey("So11111111111111111111111111111111111111112"),
          true
        )
        console.log(oraclePrice.toString(), 'oraclePrice!!!!!!!')
      
      
        const fundingAccount = await client.getFundingAccountKey(
          new PublicKey("So11111111111111111111111111111111111111112"),
          provider.wallet.publicKey,
          false,
          TOKEN_PROGRAM_ID,
          ASSOCIATED_TOKEN_PROGRAM_ID
        )
        console.log(fundingAccount.toString(), 'fundingAccount------>')
        
        const toTokenAmount = (uiAmount: number, decimals: number) => {
          return new BN(uiAmount * 10 ** decimals);
        }
  
        // const transaction = new Transaction();
        // if (oraclePrice && fundingAccount && positionKey && custody) {
        //   const open = client.openPosition(
        //     new BN(oraclePrice),
        //     toTokenAmount(0.01, 9),
        //     toTokenAmount(0.01, 9).mul(oraclePrice),
        //     "long",
        //     fundingAccount,
        //     positionKey,
        //     custody
        //     // custodies[0]
        //   )
        // }
      }
      return
    } catch(error) {
      console.log(error, 'open error------')
    }
  }

  return {
    openPosiition
  }
}


