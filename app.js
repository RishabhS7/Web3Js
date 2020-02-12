var Tx = require('ethereumjs-tx').Transaction
const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'))

//const web3 = new Web3('https://ropsten.infura.io/v3/17b4ad0be7ab4342a9c3f992ce6162ee')
const account1 = '0xac0F78a76AC9920E32750211C722393e08A3A389';
const account2 = '0xe9f6c66403BFA4D031Ec12f07B95f6F208931780';
const privatekey1 = Buffer.from('37e048680006f7114b5714b62e30bcf933f0ab31dda8658a389730f98084667b','hex')
const privatekey2 = Buffer.from('7d0aedcb3a586036f252eda7a97aa9abcfafbd6d9c13caf912fc4be4017c6212','hex')


const contractABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"standard","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"Dapptoken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}];
const contractAddress = '0x8f753C9Ebd9c65aE89aeFf4De2B07DC9d305752e'
var dapptokenContract = new web3.eth.Contract(contractABI,contractAddress);

dapptokenContract.methods.name().call((err,result)=>{console.log(result)})
dapptokenContract.methods.totalSupply().call((err,result)=>{console.log(result)})
dapptokenContract.methods.symbol().call((err,result)=>{console.log(result)})
dapptokenContract.methods.balanceOf(account1).call((err,result)=>{console.log(result)})
//console.log(dapptokenContract);

// console.log(process.env.privatekey1)

// web3.eth.getBalance(account1,(err,bal)=>{
//   console.log('account1 balance:',web3.utils.fromWei(bal,'ether'))
// })

// web3.eth.getBalance(account2,(err,bal)=>{
//     console.log('account2 balance:',web3.utils.fromWei(bal,'ether'))
//   })

// web3.eth.getTransaction(account1,(err,txCount)=>{
//     //get data
//     const data = '0x60606040526040805190810160405280600a81526020017f4441707020546f6b656e000000000000000000000000000000000000000000008152506000908051906020019061004f9291906100f8565b506040805190810160405280600481526020017f44417070000000000000000000000000000000000000000000000000000000008152506001908051906020019061009b9291906100f8565b506040805190810160405280600f81526020017f4441707020546f6b656e2076312e300000000000000000000000000000000000815250600290805190602001906100e79291906100f8565b5034156100f357600080fd5b61019d565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061013957805160ff1916838001178555610167565b82800160010185558215610167579182015b8281111561016657825182559160200191906001019061014b565b5b5090506101749190610178565b5090565b61019a91905b8082111561019657600081600090555060010161017e565b5090565b90565b610bd0806101ac6000396000f3006060604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100a9578063095ea7b31461013757806318160ddd1461019157806323b872dd146101ba5780635a3b7e421461023357806370a08231146102c157806395d89b411461030e578063a9059cbb1461039c578063d81a63a4146103f6578063dd62ed3e1461040b575b600080fd5b34156100b457600080fd5b6100bc610477565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100fc5780820151818401526020810190506100e1565b50505050905090810190601f1680156101295780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561014257600080fd5b610177600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610515565b604051808215151515815260200191505060405180910390f35b341561019c57600080fd5b6101a4610607565b6040518082815260200191505060405180910390f35b34156101c557600080fd5b610219600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061060d565b604051808215151515815260200191505060405180910390f35b341561023e57600080fd5b61024661087c565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561028657808201518184015260208101905061026b565b50505050905090810190601f1680156102b35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156102cc57600080fd5b6102f8600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061091a565b6040518082815260200191505060405180910390f35b341561031957600080fd5b610321610932565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610361578082015181840152602081019050610346565b50505050905090810190601f16801561038e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156103a757600080fd5b6103dc600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506109d0565b604051808215151515815260200191505060405180910390f35b341561040157600080fd5b610409610b29565b005b341561041657600080fd5b610461600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610b7f565b6040518082815260200191505060405180910390f35b60008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561050d5780601f106104e25761010080835404028352916020019161050d565b820191906000526020600020905b8154815290600101906020018083116104f057829003601f168201915b505050505081565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60035481565b6000600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561065d57600080fd5b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156106e857600080fd5b81600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555081600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109125780601f106108e757610100808354040283529160200191610912565b820191906000526020600020905b8154815290600101906020018083116108f557829003601f168201915b505050505081565b60046020528060005260406000206000915090505481565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109c85780601f1061099d576101008083540402835291602001916109c8565b820191906000526020600020905b8154815290600101906020018083116109ab57829003601f168201915b505050505081565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151515610a2057600080fd5b81600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b6000620f4240905080600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508060038190555050565b60056020528160005260406000206020528060005260406000206000915091505054815600a165627a7a723058209c0f3b48cc04c30bbfcacaa4990033809537e75c843493b447a428589185f8f00029';


//   //bulid the transaction
//   const txObject ={
//       nonce: web3.utils.toHex(txCount),
      
//       //value : web3.utils.toHex(web3.utils.toWei('1','ether')),
//       gasLimit:   web3.utils.toHex(1000000) ,
//       gasPrice:   web3.utils.toHex(web3.utils.toWei('10','gwei')),
//       data:       data
//     } 
//   //console.log(txObject)
//   //sign the transaction
//   const tx = new Tx(txObject)
//   tx.sign(privatekey1)

//   const serializedTransaction =tx.serialize()
//   const raw ='0x' + serializedTransaction.toString('hex')

//   //broadcasrt the transaction
//   web3.eth.sendSignedTransaction(raw,(err, txHash)=>{
//       console.log('err:',err,'txhash:',txHash)
//   })
//  })
