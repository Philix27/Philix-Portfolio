import { ethers } from "ethers";

/**
 * Shorten a wallet address.
 * @param {string} address - The full wallet address to shorten.
 * @param {number} [chars=4] - The number of characters to show at the start and end.
 * @returns {string} The shortened address.
 */
export function shortenAddress(address: string, chars = 4) {
  if (address.length <= chars * 2) {
    return address;
  }
  const start = address.slice(0, chars);
  const end = address.slice(-chars);
  return `${start}...${end}`;
}


export function formatBalance(balance:BigInt, decimals = 18) {
  return ethers.formatUnits(balance.toString(), decimals);
}