// Edmar Bila dos Santos
// Aprendi a ter retorno dos dados digitados pelo usuario no terminal.

//biblioteca sync
var readlineSync = require('readline-sync');

//Menu exibido ao usuario

console.log('1-Pipoca','2-Macarrao','3-Carne','4-Feijao','5-Brigadeiro')

// bloco de seleção opção 1 pipoca
console.log('Escreva o Nome do Prato Desejado:');
  const opcoes = readlineSync.question()



while (opcoes === 'pipoca'){

    if (opcoes === 'pipoca'){

console.log('Pipoca Selecionado')};


console.log('digite o Tempo:')
  let ptime = readlineSync.question();
    

     if (ptime >20 && ptime <=30){ console.log('A Comida Queimou')
     };

    if (ptime < 10){ console.log('Tempo Insuficiente')
     };

     if (ptime > 30){ console.log('Kabum!')
     };
     
     if (ptime >=10 && ptime <=20 ){
         return console.log('Prato pronto, bom apetite!!!')}

     };

     // menu macarrao
    while(opcoes === 'macarrao'){

     if (opcoes === 'macarrao'){

        console.log('Macarrao Selecionado')};
        
        
        console.log('digite o Tempo:')
          let mtime = readlineSync.question();
            
        
             if (mtime >=17 && ptime <=24){ console.log('A Comida Queimou')
             };
        
            if (mtime < 8){ console.log('Tempo Insuficiente')
             };
        
             if(mtime > 24){ console.log('Kabum!')
             };
             
             if(mtime >=8 && ptime <=16 ){
                 return console.log('Prato pronto, bom apetite!!!')
        
             }};

             // menu carne

             while (opcoes === 'carne'){

             if (opcoes === 'carne'){

                console.log('Carne Selecionado')};
                
                
                console.log('digite o Tempo:')
                  let ctime = readlineSync.question();
                    
                
                     if (ctime >30 && ptime <=44){ console.log('A Comida Queimou')
                     };
                
                    if (ctime < 15){ console.log('Tempo Insuficiente')
                     };
                
                     if(ctime > 45){ console.log('Kabum!')
                     };
                     
                     if(ctime >=15 && ptime <=29 ){
                         return console.log('Prato pronto, bom apetite!!!')
                
                     }};

             // menu feijao

             while (opcoes === 'feijao'){        

             if (opcoes === 'feijao'){

                console.log('Feijao Selecionado')};
                
                
                console.log('digite o Tempo:')
                  let ftime = readlineSync.question();
                    
                
                     if (ftime >24 && ptime <=36){ console.log('A Comida Queimou')
                     };
                
                    if (ftime < 12){ console.log('Tempo Insuficiente')
                     };
                
                     if(ftime > 36){ console.log('Kabum!')
                     };
                     
                     if(ftime >=12 && ptime <=24 ){
                         return console.log('Prato pronto, bom apetite!!!')
                
                     }};

                     while (opcoes === 'brigadeiro'){
     
                     if (opcoes === 'brigadeiro'){

                        console.log('Brigadeiro Selecionado')};
                        
                    

                        console.log('digite o Tempo:')

                          let btime = readlineSync.question();

                          if (btime >=17 && ptime <=24){ console.log('A Comida Queimou')
                        };
                   
                       if (btime < 8){ console.log('Tempo Insuficiente')
                        };
                   
                        if(btime > 24){ console.log('Kabum!')
                        };
                        
                        if(btime >=8 && ptime <=16 ){
                            return console.log('Prato pronto, bom apetite!!!')
                   
                        }};
                            
                        
                            