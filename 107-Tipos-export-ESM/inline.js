export function inline(){
    console.log("Export nomeado inline")// Posso exporta qunato eu quizer
}

export default function defaultInline(){
    console.log("Exporte default inline")// Só pode ter um por arquivo, também pode ser uma função anônima
}