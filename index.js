import { connectRPC } from "./rpc.client.js";
import { loadContracts } from "./contract.registry.js";
import { scanContract } from "./vulnerability.scanner.js";
import { generateReport } from "./audit.report.js";
import { NETWORK } from "./network.config.js";

console.log("Smart Contract Audit Simulator");
console.log("Active Network:", NETWORK);

const provider = connectRPC();
const contracts = loadContracts();

const scanResult = scanContract(contracts[0]);
generateReport(scanResult);
