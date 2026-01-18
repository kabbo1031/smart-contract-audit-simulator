export function loadContracts() {
  console.log("Loading contracts...");

  return [
    {
      name: "LiquidityPool",
      address: "0xCONTRACT001",
      language: "Solidity"
    },
    {
      name: "GovernanceDAO",
      address: "0xCONTRACT002",
      language: "Solidity"
    }
  ];
}
