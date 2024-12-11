document.addEventListener('DOMContentLoaded', function() {
    var heartRateChart = [];
    var stepsChart = [];
    var oxygenChart = [];
    var heartActivityChart = [];
    var freqRespChart = [];
    var tempCorpChart = [];
    var exercicioChart = [];
    var consumoCalChart = [];
    var pesoChart = [];
  
  
   
  var ranges = {
    freqCard : {min: 60, max: 100},
    ativFisc : {min: null, max: null},
    freqResp : {min: 12, max:20},
  }
    
    
    document.getElementById('respMin').value = ranges.freqResp.min;
    document.getElementById('respMax').value = ranges.freqResp.max;
    
    document.getElementById('freqMin').value = ranges.freqCard.min;
    document.getElementById('freqMax').value = ranges.freqCard.max;

  let tour = document.getElementsByClassName('filter-item');
  for( let aux = 0; aux < tour.length-1; aux++) {
     tour[aux].classList.add('selected');
     let btn = document.getElementsByClassName("pular-tutorial");
     btn[0].addEventListener('click', function() {
       btn[0].classList.add('hidden');
       tour[aux].classList.remove('selected');
       document.getElementById('expandir-todos').classList.add('selected');
       document.getElementsByClassName('selected-texto')[4].classList.add('show-block')
       btn[1].addEventListener('click', function () {
          document.getElementById('expandir-todos').classList.remove('selected');
          document.getElementsByClassName('selected-texto')[4].classList.remove('show-block')
         
          let elementos = document.getElementsByClassName('toggle-btn');
          document.getElementsByClassName('selected-texto')[5].classList.add('show-block');
          elementos[0].classList.add('selected');
          btn[2].addEventListener("click", function() { 
                elementos[0].classList.remove('selected');  
                document.getElementById('overlay').classList.add('hidden');
                document.getElementsByClassName('selected-texto')[5].classList.remove('show-block');
          });
       });
    }); 
  }
    
  const pacientes = [
    { 
        id: 0, 
        nome: 'João Silva', 
        idade: 45, 
        medicamento: 'Atenolol', 
        tempoInativo: 8,
        freqCard: 72, 
        freqResp: 16, 
        ativFisica: 60, 
        peso: '95 kg', 
        altura: '1,78 m', 
        calorias: 450,
        oxygenChart : {
            daily: { 
                data: [95, 96, 94, 97, 96],
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'] 
            },
            monthly: { 
                data: [96, 95, 94, 96, 97],
                label: ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO'] 
            },
            weekly: { 
                data: [95, 96, 97, 94, 96], 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
            },
            hourly: { 
                data: [95, 96, 94, 97, 96, 95, 96, 97, 94, 95, 96, 97],
                label: ['00', '02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'] 
            }
        },
        stepsChart : {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
                data: [5000, 7000, 8000, 6000, 7500]
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
                data: [150000, 130000, 140000, 160000, 155000]
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [10000, 9500, 12000, 11000, 10500]
            },
            hourly: { 
                label: ['22', '00', '02', '04', '06', '08', '10', '12'],
                data: [500, 700, 650, 800, 750, 600, 900, 850]
            }
        },
        heartRateChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [72, 75, 74, 73, 76] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [74, 75, 73, 72, 76] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [72, 74, 75, 73, 76] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [70, 72, 71, 74, 73, 75, 76, 72, 74, 75, 73] 
            }
        },
        freqRespChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [16, 17, 16, 18, 17] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [16, 15, 16, 17, 16] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [16, 17, 15, 16, 17] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [16, 15, 16, 17, 16, 15, 17, 16, 15, 16, 17] 
            }
        },
        tempCorpChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [36.5, 36.7, 36.6, 36.8, 36.7] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [36.6, 36.5, 36.7, 36.8, 36.6] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [36.5, 36.7, 36.6, 36.8, 36.7] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [36.5, 36.6, 36.7, 36.8, 36.6, 36.5, 36.7, 36.8, 36.7, 36.6, 36.5] 
            }
        },
        exercicioChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [15, 20, 30,  45, 60] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [60, 90, 100, 120, 150] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [5, 15, 30, 30, 45] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [0, 0, 0, 0, 0, 10, 15, 20, 25, 25, 25, 30] 
            }
        },
        consumoCalChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [2200, 2100, 2400, 2300, 2500] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [7000, 6500, 7500, 7800, 8200] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [2000, 0, 2200, 2500, 2400] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [200, 0, 0, 0, 600, 800, 700, 0, 300, 0, 700] 
            }
        },
        pesoChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [95, 95, 95, 95, 95] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [95, 94.5, 95.2, 94.8, 95] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [95, 95, 95, 95, 95] 
            },
            hourly: { 
                label: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'], 
                data: [95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95] 
            }
        }
    },
    { 
        id: 1, 
        nome: 'Ana Costa', 
        idade: 60, 
        medicamento: 'Insulina', 
        tempoInativo: 12,
        freqCard: 90, 
        freqResp: 24, 
        ativFisica: 10, 
        peso: '120 kg', 
        altura: '1,65 m', 
        calorias: 1200,
        oxygenChart : {
            daily: { 
                data: [88, 89, 87, 85, 86],
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'] 
            },
            monthly: { 
                data: [86, 87, 85, 86, 87],
                label: ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO'] 
            },
            weekly: { 
                data: [88, 87, 86, 84, 85], 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
            },
            hourly: { 
                data: [86, 85, 84, 85, 83, 82, 81, 80, 79, 78, 77, 76],
                label: ['00', '02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'] 
            }
        },
        stepsChart : {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
                data: [2000, 1500, 1000, 800, 500]
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
                data: [35000, 30000, 25000, 20000, 15000]
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [1500, 1000, 1200, 800, 500]
            },
            hourly: { 
                label: ['22', '00', '02', '04', '06', '08', '10', '12'],
                data: [100, 50, 30, 20, 10, 0, 0, 0]
            }
        },
        heartRateChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [90, 92, 95, 88, 89] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [92, 90, 91, 93, 90] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [89, 90, 91, 92, 90] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [90, 92, 91, 93, 90, 89, 88, 90, 91, 92, 89] 
            }
        },
        freqRespChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [24, 25, 23, 26, 25] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [25, 24, 23, 26, 25] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [24, 25, 23, 26, 25] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [24, 25, 24, 26, 25, 23, 24, 25, 24, 23, 22] 
            }
        },
        tempCorpChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [37.5, 37.7, 37.6, 37.8, 37.5] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [37.6, 37.5, 37.7, 37.6, 37.5] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [37.5, 37.6, 37.5, 37.8, 37.7] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [37.5, 37.6, 37.7, 37.8, 37.6, 37.5, 37.7, 37.8, 37.5, 37.6, 37.5] 
            }
        },
        exercicioChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [5, 15, 0, 0, 0] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [5, 10, 15, 20, 30] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [0, 0, 0, 0, 20] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [0, 0, 0, 5, 10, 15, 20, 20, 20, 20, 20] 
            }
        },
        consumoCalChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [2000, 1800, 1500, 1600, 1400] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [6000, 5500, 5200, 5000, 4900] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [1900, 1800, 2000, 1700, 1500] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [200, 300, 100, 150, 200, 250, 300, 200, 150, 0, 400] 
            }
        },
        pesoChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
                data: [120, 120, 120, 120, 120] 
                
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [120, 121, 120.5, 120, 121] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [120, 120, 120, 120, 120] 
            },
            hourly: { 
                label: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'], 
                data: [120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120] 
            }
        }
    },
    { 
        id: 2, 
        nome: 'Carlos Almeida', 
        idade: 32, 
        medicamento: 'Ibuprofeno', 
        tempoInativo: 10,
        freqCard: 78, 
        freqResp: 20, 
        ativFisica: 30, 
        peso: '85 kg', 
        altura: '1,75 m', 
        calorias: 2800,
        oxygenChart : {
            daily: { 
                data: [92, 93, 94, 91, 92],
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'] 
            },
            monthly: { 
                data: [91, 92, 93, 92, 91],
                label: ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO'] 
            },
            weekly: { 
                data: [92, 91, 93, 94, 92], 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
            },
            hourly: { 
                data: [92, 93, 91, 90, 92, 94, 93, 92, 91, 90, 92, 93],
                label: ['00', '02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'] 
            }
        },
        stepsChart : {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
                data: [6000, 5000, 7000, 8000, 9000]
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
                data: [100000, 95000, 90000, 110000, 115000]
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [7000, 6000, 8000, 9000, 8500]
            },
            hourly: { 
                label: ['22', '00', '02', '04', '06', '08', '10', '12'],
                data: [200, 300, 500, 600, 700, 800, 900, 1000]
            }
        },
        heartRateChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [78, 80, 76, 75, 79] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [77, 78, 76, 75, 78] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [78, 79, 76, 77, 75] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [77, 78, 76, 78, 79, 75, 76, 78, 79, 77, 76] 
            }
        },
        freqRespChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [20, 19, 21, 20, 19] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [20, 19, 20, 21, 19] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [20, 19, 20, 21, 19] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [20, 19, 20, 21, 19, 20, 19, 20, 19, 20, 21] 
            }
        },
        tempCorpChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [36.8, 37.0, 36.9, 36.7, 36.8] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [36.9, 36.8, 36.7, 36.9, 36.8] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [36.8, 36.9, 36.7, 36.8, 36.9] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [36.8, 36.9, 36.7, 36.8, 36.9, 36.8, 36.7, 36.8, 36.9, 36.8, 36.7] 
            }
        },
        exercicioChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [0, 20, 30, 40, 50] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [50, 100, 150, 200, 250] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [20, 30, 50, 50, 50] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [0, 0, 0, 0, 20, 30, 30, 30, 30, 30, 35] 
            }
        },
        consumoCalChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [2700, 2500, 2900, 3000, 2800] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [8000, 8200, 7900, 8500, 8600] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [2800, 2700, 2900, 2600, 2500] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [300, 400, 500, 600, 700, 800, 100, 0] 
            }
        },
        pesoChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
                data: [85, 85, 85, 85, 85] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [85, 85.2, 84.8, 85, 85.1] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [85, 85, 84.8, 85, 85] 
            },
            hourly: { 
                label: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'], 
                data: [85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85] 
            }
        }
    },
    { 
        id: 3, 
        nome: 'Maria Ferreira', 
        idade: 45, 
        medicamento: 'Atorvastatina',  
        tempoInativo: 7,
        freqCard: 75, 
        freqResp: 22, 
        ativFisica: 20, 
        peso: '70 kg', 
        altura: '1,62 m', 
        calorias: 2500,
        oxygenChart : {
            daily: { 
                data: [95, 94, 95, 96, 95],
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'] 
            },
            monthly: { 
                data: [95, 96, 95, 95, 94],
                label: ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO'] 
            },
            weekly: { 
                data: [96, 95, 94, 95, 96], 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
            },
            hourly: { 
                data: [95, 94, 96, 95, 96, 95, 94, 95, 96, 94, 95, 96],
                label: ['00', '02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'] 
            }
        },
        stepsChart : {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
                data: [8000, 7000, 6000, 5000, 4000]
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
                data: [120000, 115000, 110000, 100000, 95000]
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [6000, 7000, 8000, 5000, 4000]
            },
            hourly: { 
                label: ['22', '00', '02', '04', '06', '08', '10', '12'],
                data: [400, 500, 600, 700, 800, 900, 1000, 1100]
            }
        },
        heartRateChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [75, 76, 77, 78, 76] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [76, 75, 77, 76, 78] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [75, 76, 78, 77, 76] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [76, 75, 77, 76, 78, 76, 75, 76, 77, 76, 75] 
            }
        },
        freqRespChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [22, 21, 23, 22, 21] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [22, 21, 23, 22, 21] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [22, 21, 22, 23, 22] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [22, 23, 22, 21, 22, 21, 23, 22, 21, 22, 21] 
            }
        },
        tempCorpChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [36.9, 37.1, 36.8, 37.0, 37.2] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [37.0, 36.9, 37.1, 37.0, 36.8] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [37.0, 37.1, 36.9, 37.0, 36.8] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [37.0, 37.1, 36.9, 37.0, 36.8, 37.1, 37.0, 37.2, 37.1, 37.0, 37.1] 
            }
        },
        exercicioChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [20, 25, 30, 35, 45] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [70, 80, 90, 100, 120] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [10, 15, 20, 25, 30] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [0, 0, 5, 10, 20, 30, 30, 30, 30, 30, 30] 
            }
        },
        consumoCalChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [2500, 2400, 2300, 2600, 2500] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [7200, 7300, 7500, 7600, 7400] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [2600, 2500, 2400, 2300, 2500] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [200, 250, 300, 350, 400, 450, 500, 0] 
            }
        },
        pesoChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [70, 70, 70, 70, 70] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [70, 70.2, 69.8, 70, 70.1] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [70, 70.1, 69.9, 70, 70] 
            },
            hourly: { 
                label: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'], 
                data: [70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70] 
            }
        }
    },
    { 
        id: 4, 
        nome: 'Lucas Santos', 
        idade: 29, 
        medicamento: 'Metformina',  
        tempoInativo: 12,
        freqCard: 70, 
        freqResp: 21, 
        ativFisica: 25, 
        peso: '82 kg', 
        altura: '1,80 m', 
        calorias: 2700,
        oxygenChart : { 
            daily: { 
                data: [94, 93, 94, 93, 92],
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'] 
            },
            monthly: { 
                data: [94, 95, 94, 93, 94],
                label: ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO'] 
            }, 
            weekly: {
                data: [94, 95, 93, 94, 95], 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
            },
            hourly: { 
                data: [93, 94, 95, 94, 93, 92, 94, 93, 94, 93, 92, 91],
                label: ['00', '02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'] 
            }
        },
        stepsChart : {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
                data: [7000, 8000, 6000, 5000, 4000]
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
                data: [95000, 100000, 90000, 85000, 80000]
            },
            weekly: {
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [5000, 6000, 7000, 8000, 9000]
            },
            hourly: { 
                label: ['22', '00', '02', '04', '06', '08', '10', '12'],
                data: [200, 300, 400, 500, 600, 700, 800, 900]
            }
        },
        heartRateChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [70, 72, 71, 70, 69] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [71, 70, 72, 71, 69] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [70, 71, 69, 70, 71] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [71, 70, 69, 71, 70, 69, 70, 71, 70, 69, 71] 
            }
        },
        freqRespChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [21, 20, 22, 21, 20] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [20, 21, 20, 21, 22] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [21, 20, 21, 22, 21] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [21, 20, 21, 22, 21, 20, 21, 20, 21, 20, 21] 
            }
        },
        tempCorpChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [37.1, 37.0, 36.9, 37.2, 37.0] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [37.0, 37.1, 37.0, 37.1, 37.2] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [37.2, 37.1, 37.0, 37.1, 37.0] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [37.1, 37.0, 37.2, 37.1, 37.0, 37.2, 37.1, 37.0, 37.2, 37.1, 37.0] 
            }
        },
        exercicioChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [10, 15, 20, 25, 30] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [70, 80, 90, 100, 110] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [15, 20, 25, 25, 30] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [0, 0, 0, 0, 15, 15, 20, 25, 30, 35, 40] 
            }
        },
        consumoCalChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [2800, 2700, 2600, 2500, 2400] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [8000, 7500, 7700, 7900, 8100] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [2700, 2800, 2900, 2600, 2500] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [400, 300, 500, 600, 0, 0, 0, 0] 
            }
        },
        pesoChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [82, 82, 82, 82, 82] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [82, 82.2, 81.8, 82, 81.9] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [82, 82.1, 81.9, 82, 82] 
            },
            hourly: { 
                label: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'], 
                data: [82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82] 
            }
        }
    },
    { 
        id: 5, 
        nome: 'Julia Pereira', 
        idade: 36, 
        medicamento: 'Losartana',  
        tempoInativo: 9,
        freqCard: 76, 
        freqResp: 20, 
        ativFisica: 35, 
        peso: '68 kg', 
        altura: '1,65 m', 
        calorias: 2200,
        oxygenChart : {
            daily: { 
                data: [98, 97, 96, 95, 96],
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'] 
            },
            monthly: { 
                data: [97, 98, 97, 96, 95],
                label: ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO'] 
            },
            weekly: { 
                data: [95, 96, 97, 98, 97], 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
            },
            hourly: { 
                data: [96, 97, 96, 97, 98, 97, 96, 95, 96, 97, 96, 95, 96, 97],
                label: ['00', '02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'] 
            }
        },
        stepsChart : {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
                data: [8000, 9000, 10000, 11000, 12000]
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
                data: [100000, 105000, 110000, 115000, 120000]
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [9000, 10000, 11000, 12000, 13000]
            },
            hourly: { 
                label: ['22', '00', '02', '04', '06', '08', '10', '12'],
                data: [600, 700, 800, 900, 1000, 1100, 1200, 1300]
            }
        },
        heartRateChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [76, 77, 78, 77, 76] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [77, 76, 78, 77, 76] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [76, 77, 78, 76, 77] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [77, 76, 78, 76, 77, 76, 78, 76, 77, 76, 77] 
            }
        },
        freqRespChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [20, 21, 20, 19, 20] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [20, 20, 21, 20, 19] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [20, 19, 20, 21, 20] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [20, 21, 20, 20, 19, 20, 19, 20, 21, 20, 19] 
            }
        },
        tempCorpChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [36.8, 36.9, 37.0, 36.9, 37.1] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [36.9, 36.8, 37.0, 36.9, 36.8] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [36.9, 37.0, 37.1, 36.9, 36.8] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [36.9, 37.0, 37.1, 36.9, 37.0, 36.8, 36.9, 37.0, 37.1, 36.9, 37.0] 
            }
        },
        exercicioChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [20, 25, 30, 30, 35] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [90, 95, 100, 105, 110] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [20, 25, 30, 30, 30, 42] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [0, 0, 0, 0, 10, 20, 20, 20, 28, 35, 42] 
            }
        },
        consumoCalChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [2200, 2300, 2400, 2100, 2200] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [7000, 7100, 7200, 7300, 7400] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [2100, 2200, 2300, 2400, 2500] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [300, 400, 500, 600, 700, 800, 900, 500] 
            }
        },
        pesoChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [68, 68, 68, 68, 68] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
                data: [68, 68.1, 68.2, 68, 67.9] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [68, 68.1, 68, 67.9, 68] 
            },
            hourly: { 
                label: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'], 
                data: [68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68] 
            }
        }
    },
]; 


    var ranges;
    let ordem = {
        chave: null,
        direcao: 'asc'
    };

    renderPacientes(pacientes);

    function renderPacientes(pacientes) {

      const tabela = document.getElementById('pacientes-tabela');
        tabela.innerHTML = '';

        // Obtendo os limites mínimo e máximo
        const freqMin = parseFloat(document.getElementById('freqMin').value) || -Infinity;
        const freqMax = parseFloat(document.getElementById('freqMax').value) || Infinity;
        const respMin = parseFloat(document.getElementById('respMin').value) || -Infinity;
        const respMax = parseFloat(document.getElementById('respMax').value) || Infinity;
        const ativMin = parseFloat(document.getElementById('ativMin').value) || undefined;
        const ativMax = parseFloat(document.getElementById('ativMax').value) || undefined;
      
        ranges.freqCard = {min:freqMin, max:freqMax};
        ranges.freqResp = {min:respMin, max:respMax};
        ranges.ativFisc = {min:ativMin, max:ativMax};

        pacientes.forEach((paciente, index) => {
          
            stepsChart[index] = undefined;
            oxygenChart[index] = undefined;
            heartRateChart[index] = undefined;
            heartActivityChart[index] = undefined;
            freqRespChart[index] = undefined;
            tempCorpChart[index] = undefined;
            exercicioChart[index] = undefined;
            consumoCalChart[index] = undefined;
            pesoChart[index] = undefined;
          
           paciente.freqResp = paciente.freqRespChart.hourly.data[paciente.freqRespChart.hourly.data.length-1];
           paciente.freqCard = paciente.heartRateChart.hourly.data[paciente.heartRateChart.hourly.data.length-1];
           paciente.ativFisica = paciente.exercicioChart.hourly.data[paciente.exercicioChart.hourly.data.length-1];
             //console.log(respMin);
            paciente.freqMax = paciente.heartRateChart.hourly.data[paciente.heartRateChart.hourly.data.length-1] > paciente.heartRateChart.hourly.data[paciente.heartRateChart.hourly.data.length-2] ? paciente.heartRateChart.hourly.data[paciente.heartRateChart.hourly.data.length-1] : paciente.heartRateChart.hourly.data[paciente.heartRateChart.hourly.data.length-2];
            paciente.freqMin = paciente.heartRateChart.hourly.data[paciente.heartRateChart.hourly.data.length-1] < paciente.heartRateChart.hourly.data[paciente.heartRateChart.hourly.data.length-2] ? paciente.heartRateChart.hourly.data[paciente.heartRateChart.hourly.data.length-1] : paciente.heartRateChart.hourly.data[paciente.heartRateChart.hourly.data.length-2];
            
          
            let showAlertFreqCard = ((paciente.freqMax < freqMin || paciente.freqMin < freqMin) || (paciente.freqMax > freqMax || paciente.freqMin > freqMax )) ? 'alert' : '';
            
          
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${paciente.nome}</td>
                <td>${paciente.idade}</td>
                <td>${paciente.medicamento}</td>
                <td class="${showAlertFreqCard}"><span>MIN ${paciente.freqMin}</span> / <span>MAX ${paciente.freqMax}</span> <span>BPM</span> <span>(últimas 4h)</span></td>
                <td class="${paciente.freqResp < respMin || paciente.freqResp > respMax ? 'alert' : ''}">${paciente.freqResp} MRM</td>
                <td class="${paciente.ativFisica < ativMin || paciente.ativFisica > ativMax ? 'alert' : ''}">${paciente.ativFisica} Min</td>
                <td class="toggle-btn"><button onclick="toggleDetalhes(${index})">↕</button></td>
            `;
            tabela.appendChild(row);
 
            const detalhesRow = document.createElement('tr');
            detalhesRow.classList.add('detalhes');
            detalhesRow.innerHTML = `
                <td colspan="7" id="detalhes-${index}" class="detalhes-container hidden">
                    <div class="modal">
                        <div class="details-content">
                            <div class="left-section">
                                <div class="item">
                                  <span>Nome do Paciente:</span>
                                  <span class="value">${paciente.nome}</span>
                                </div>
                                <div class="item">
                                  <span>Altura:</span>
                                  <span class="value">${paciente.altura}</span>
                                  <span>Idade:</span> <span class="value">${paciente.idade}</span>
                                </div>
                                <div class="item peso">
                                  <span>Peso:</span>
                                  <span class="value">${paciente.pesoChart.hourly.data[paciente.pesoChart.hourly.data.length-1]}</span>
                                </div>
                                <div class="item freq_atitv selecionado">
                                  <span class="value">Freq. Cardíaca</span>x
                                  <span class="value"> Atividade Física</span>
                                </div>
                                <div class="item calorias">
                                  <span>Nível de Calorias:</span>
                                  <span class="value">${paciente.consumoCalChart.hourly.data[paciente.consumoCalChart.hourly.data.length-1]}</span>
                                  <span class="unit">CAL</span>
                                </div>
                                <div class="item exercicio">
                                  <span>Exercício:</span>
                                  <span class="value">${paciente.exercicioChart.hourly.data[paciente.exercicioChart.hourly.data.length-1]}</span>
                                  <span class="unit">MIN</span>
                                </div>
                            </div>
                            <div class="center-section"> 
                              <div class="charts charts-${index}" id="charts-${index}""> 
                              <div class="col-3 hidden" id="oxign-${index}">
                                <h3>Oxigenação do Sangue</h3>
                                <canvas id="oxygenChart-${index}"></canvas>
                              </div>
                              <div class="col-3 hidden" id="steps-${index}">
                                <h3>Atividade Física</h3>
                                <canvas id="stepsChart-${index}"></canvas>
                              </div>
                              <div class="col-3 hidden" id="freq_card-${index}">
                                <h3>Frequência Cardíaca</h3>
                                <canvas id="heartRateChart-${index}"></canvas>
                              </div>
                              <div class="col-3" id="freq_atitv-${index}">
                                <h3>Frequência Cardíaca x Atividade Física</h3>
                                <canvas id="heartActivityChart-${index}"></canvas>
                              </div>
                              <div class="col-3 hidden" id="freq_resp-${index}">
                                <h3>Frequência Respiratória</h3>
                                <canvas id="freqRespChart-${index}"></canvas>
                              </div> 
                              <div class="col-3 hidden" id="temp_corp-${index}">
                                <h3>Temperatura Corporal</h3>
                                <canvas id="tempCorpChart-${index}"></canvas>
                              </div>
                              <div class="col-3 hidden" id="exercicio-${index}">
                                <h3>Tempo em Exercício</h3>
                                <canvas id="exercicioChart-${index}"></canvas>
                              </div> 
                              <div class="col-3 hidden" id="calorias-${index}">
                                <h3>Consumo de Calorias</h3>
                                <canvas id="consumoCalChart-${index}"></canvas>
                              </div>
                              <div class="col-3 hidden" id="peso-${index}">
                                <h3>Oscilação de Peso</h3>
                                <canvas id="pesoChart-${index}"></canvas>
                              </div>
                              <select id="periodSelector-${index}" class="selector">
                                <option selected="" value="hourly">Horas do dia atual</option>
                                <option value="daily">Dias da semana atual</option>
                                <option value="weekly">Semanas do mês atual</option>
                                <option value="monthly">Meses do ano atual</option>
                              </select>
                             </div>
                            
                            </div>
                            <div class="right-section">
                                <div class="item">
                                    <span>Tempo Inativo</span>
                                    <span class="value">${paciente.tempoInativo}</span>
                                    <span class="unit">HORAS</span>
                                </div>
                                 <div class="item steps ">
                                    <span>Pedômetro</span>
                                    <span class="value">${paciente.stepsChart.daily.data[paciente.stepsChart.daily.data.length-1]}</span>
                                    <span class="unit">Passos Hoje</span>
                                </div>
                                   <div class="item freq_card">
                                    <span>Frequência Cardíaca</span>
                                    <span class="value">MIN ${paciente.freqMin}</span>
                                    <span class="value">MAX ${paciente.freqMax}</span>
                                    <span class="unit">BPM</span>
                                    <span class="unit">(das últimas 4h)</span>
                                </div>
                                 <div class="item oxign">
                                    <span>SPO2</span>
                                    <span class="value">${paciente.oxygenChart.hourly.data[paciente.oxygenChart.hourly.data.length-1]}</span>
                                    <span class="unit">%</span>
                                </div>
                                 <div class="item freq_resp">
                                    <span>Frequência Respiratória</span>
                                    <span class="value">${paciente.freqRespChart.hourly.data[paciente.freqRespChart.hourly.data.length-1]}</span>
                                    <span class="unit">MRM</span>
                                </div>
                                <div class="item temp_corp">
                                    <span>Temperatura Corporal</span>
                                    <span class="value">${paciente.tempCorpChart.hourly.data[paciente.tempCorpChart.hourly.data.length-1]}</span>
                                    <span class="unit">°C</span>
                                </div>
                                
                        </div>
                        
                        
                    </div>
                    <div class="info">
                          <h3>Alertas</h3>
                          <div class="alert">Alerta: Oxigenação sanguínea elevada detectada!</div>
                        </div>
                </td>
            `;
          
            tabela.appendChild(detalhesRow);
          
           let chartsRow = ``;
          document.getElementById('conteudo-overlay').innerHTML += (chartsRow);
         
          const itens = document.getElementsByClassName('item');

        for (let i = 0; i < itens.length; i++) {
            if ( itens[i].classList[1] !== undefined ) {
              itens[i].addEventListener('click', () => {
                  let all = document.getElementsByClassName('selecionado');
                  for(let x=0; x<all.length;x++)
                    all[x].classList.remove('selecionado');
                
                  toggleModal(true, itens[i].classList[1], itens[i].parentElement.parentElement.parentElement.parentElement.id.replace( /^\D+/g, '') );
                  itens[i].classList.add('selecionado');
              }, false);
            }
        }
          
          const selectors = document.getElementsByClassName('selector');
             for (let i = 0; i < selectors.length; i++) {
               selectors[i].addEventListener('change', () => {
                 let period = selectors[i].value;
                 
                 criarGraficos(selectors[i].id.replace( /^\D+/g, ''), period);
              }, false); 
        }
          
        });
      
    }
  
  
   window.ordenarTabela = function(idpos, chave) {
      if (ordem.chave === chave) {
            ordem.direcao = ordem.direcao === 'asc' ? 'desc' : 'asc';
        } else {
            ordem.chave = chave;
            ordem.direcao = 'asc';
        }
        
	ordem.icon = ordem.direcao === 'desc' ? 'fa-sort-alpha-desc' : 'fa-sort-alpha-asc';
	let icones = document.getElementsByClassName('geral');
	for(let i = 0; i < icones.length; i++) {
		icones[i].classList.remove('fa-sort-alpha-desc', 'fa-sort-alpha-asc');
	}
	document.getElementById(idpos).classList.add(ordem.icon);

        pacientes.sort((a, b) => {
            const valorA = a[chave];
            const valorB = b[chave];

            if (valorA < valorB) {
                return ordem.direcao === 'asc' ? -1 : 1;
            }
            if (valorA > valorB) {
                return ordem.direcao === 'asc' ? 1 : -1;
            }
            return 0;
        });

        renderPacientes(pacientes);
    };
  
  
  

    window.toggleDetalhes = function(index) {
        const detalhes = document.getElementById(`detalhes-${index}`);
        detalhes.classList.toggle('hidden');
        let period = 'hourly';
        criarGraficos(index, period);
    }
  
  
  document.getElementById('pesquisar').addEventListener('click', buscarPaciente);
 
    window.filtrarPacientes = function() {
        renderPacientes(pacientes);
    };
  
  
   function buscarPaciente() {
        const nome = document.getElementById('nome').value.toLowerCase();
        const pacientesFiltrados = pacientes.filter(paciente => paciente.nome.toLowerCase().includes(nome));
        renderPacientes(pacientesFiltrados);
    }
  
    function toggleAll(evt) {
      
        let flagOcultar; 
        if (evt.target.innerText == 'Expandir') {
            evt.target.innerText = 'Recolher';
            flagOcultar = true;
        } else {
          evt.target.innerText = 'Expandir';
          flagOcultar = false;
        }
          
        //let ocultos = document.querySelectorAll('.detalhes-container.hidden');
        let cont = document.getElementsByClassName('detalhes-container');
      
//       // forçando exibir todos pra depois ocultar
        for( let i = 0; i < cont.length; i++) {
          if ( flagOcultar )
            cont[i].classList.add('hidden');  
          else 
            cont[i].classList.remove('hidden');    
        }

        for (let i = 0; i < cont.length; i++)
          toggleDetalhes(i);
        
    }
    
    document.getElementById('expandir-todos').addEventListener('click', toggleAll);

    window.limparFiltros = function() {
        document.getElementById('freqMin').value = '';
        document.getElementById('freqMax').value = '';
        document.getElementById('respMin').value = '';
        document.getElementById('respMax').value = '';
        document.getElementById('ativMin').value = '';
        document.getElementById('ativMax').value = '';
        renderPacientes(pacientes);
    };
    // Dados de exemplo: frequência cardíaca (bpm) e passos por hora
        

        const index = 0; // Índice dinâmico para múltiplos gráficos

        function dataset(periodo, index) {
          
          let oxygenChart, stepsChart, heartRateChart, heartActivityChart, freqRespChart, tempCorpChart, exercicioChart, consumoCalChart, pesoChart;
          let auxPeriodo = periodo === undefined ? 'hourly' : periodo;
         
          oxygenChart = { 
            data : [{
              label: 'Oxigenação',
              data: pacientes[index].oxygenChart[auxPeriodo].data,
              borderColor: 'blue',
              fill: false
            }],
            labels : pacientes[index].oxygenChart[auxPeriodo].label
          };
          
          stepsChart = { 
            data: [{
              label: 'Passos',
              data: pacientes[index].stepsChart[auxPeriodo].data,
              backgroundColor: 'green'
            }],
            labels : pacientes[index].stepsChart[auxPeriodo].label,
          };
           
          let tmpDataset = [{
              label: 'Frequência Cardíaca Máxima',
              data: pacientes[index].heartRateChart[auxPeriodo].data,
              borderColor: 'red',
              fill: false
            }];
          
          if ( ranges.freqCard.max >= 0 ) {
            tmpDataset.push({
                label: 'Máximo',
                data: pacientes[index].heartRateChart[auxPeriodo].data.map( (e, i) => { return ranges.freqCard.max }),
                borderColor: 'black',
                fill: false,
                borderWidth: 1,
              });
          }
          
          if ( ranges.freqCard.min >= 0 ) {
            tmpDataset.push({
                label: 'Mínimo',
                data: pacientes[index].heartRateChart[auxPeriodo].data.map( (e, i) => { return ranges.freqCard.min }),
                borderColor: 'black',
                fill: false,
                borderWidth: 1,
              });
          }
          
          heartRateChart = {
            data: tmpDataset,
            labels : pacientes[index].heartRateChart[auxPeriodo].label
          };
              
          heartActivityChart = {
            data: [{
              label: 'Frequência Cardíaca Máxima (bpm)',
              data: pacientes[index].heartRateChart[auxPeriodo].label.map( (e, i) => {return {x : (isNaN(e) ? i+1 : e ), y: pacientes[index].heartRateChart[auxPeriodo].data[i] } }),
              borderColor: 'red',
              backgroundColor: 'rgba(255, 0, 0, 0.1)',
              yAxisID: 'y1',  // Ligado ao eixo y1
              fill: false
            },
                   {
                     label: 'Tempo em Atividade (Minutos)',
                     data: pacientes[index].exercicioChart[auxPeriodo].label.map( (e, i) => {return {x : (isNaN(e) ? i+1 : e ), y: pacientes[index].exercicioChart[auxPeriodo].data[i] } }),
                     borderColor: 'blue',
                     type: 'bar',
                     backgroundColor: 'rgba(11, 156, 49, 0.5)',
                     yAxisID: 'y2',  // Ligado ao eixo y2
                     fill: true
                   }
                  ],
            labels : pacientes[index].heartRateChart[auxPeriodo].label
          };

          tmpDataset = [{
              label: 'Frequência Respiratória',
              data: pacientes[index].freqRespChart[auxPeriodo].data,
              borderColor: 'red',
              fill: false
           }];
          
          if ( ranges.freqResp.max >= 0 ) {
            tmpDataset.push({
                label: 'Máximo',
                data: pacientes[index].freqRespChart[auxPeriodo].data.map( (e, i) => { return ranges.freqResp.max }),
                borderColor: 'black',
                fill: false,
                borderWidth: 1,
              });
          }
          
          if ( ranges.freqResp.min >= 0 ) {
            tmpDataset.push({
                label: 'Mínimo',
                data: pacientes[index].freqRespChart[auxPeriodo].data.map( (e, i) => { return ranges.freqResp.min }),
                borderColor: 'black',
                fill: false,
                borderWidth: 1,
              });
          }
          
          freqRespChart = {
            data: tmpDataset,
            labels : pacientes[index].freqRespChart[auxPeriodo].label
          };
              
               
          tempCorpChart = {
            data: [{
              label: 'Temperatura Corporal',
              data: pacientes[index].tempCorpChart[auxPeriodo].data,
              borderColor: 'red',
              fill: false
            }],
            labels : pacientes[index].tempCorpChart[auxPeriodo].label
          };

           tmpDataset = [{
              label: 'Exercício em Minutos',
              data: pacientes[index].exercicioChart[auxPeriodo].data,
              borderColor: 'green',
              backgroundColor: 'green',
              fill: false,
           }];
          
          if ( ranges.ativFisc.max >= 0 ) {
            tmpDataset.push({
                label: 'Máximo',
                data: pacientes[index].exercicioChart[auxPeriodo].data.map( (e, i) => { return ranges.ativFisc.max }),
                borderColor: 'black',
                fill: false,
                borderWidth: 1,
                type: 'line',
              });
          }
          
          if ( ranges.ativFisc.min >= 0 ) {
            tmpDataset.push({
                label: 'Mínimo',
                data: pacientes[index].exercicioChart[auxPeriodo].data.map( (e, i) => { return ranges.ativFisc.min }),
                borderColor: 'black',
                fill: false,
                borderWidth: 1,
                type: 'line',
              });
          }
          
          exercicioChart = {
            data: tmpDataset,
            labels : pacientes[index].exercicioChart[auxPeriodo].label
          };
              
          consumoCalChart = {
            data: [{
              label: 'Consumo de Calorias',
              data: pacientes[index].consumoCalChart[auxPeriodo].data,
              borderColor: 'red',
              fill: false
            }],
            labels : pacientes[index].consumoCalChart[auxPeriodo].label
          };
              
          pesoChart = {
            data: [{
              label: 'Oscilação de Peso',
              data: pacientes[index].pesoChart[auxPeriodo].data,
              borderColor: 'red',
              fill: false
            }],
            labels : pacientes[index].pesoChart[auxPeriodo].label
          }; 

          return {oxygenChart, stepsChart, heartRateChart, heartActivityChart, freqRespChart, tempCorpChart, exercicioChart, consumoCalChart, pesoChart}
        }
        
        function criarGraficos(index, periodo) {

          let refreshData = dataset(periodo, index);
          
          const ctxHeartActivity = document.getElementById(`heartActivityChart-${index}`).getContext('2d');

           if ( heartActivityChart[index] === undefined ) {
            heartActivityChart[index] = new Chart(ctxHeartActivity, {
                type: 'line', // Tipo de gráfico de linha
                data: {
                  labels: refreshData.heartActivityChart.labels,
                  datasets: refreshData.heartActivityChart.data
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                             title: {
                                display: true,
                                text: 'Período'
                            },
                            type: 'linear',
                            position: 'bottom', 
                            ticks: {
                                callback: function(value) {
                                    let period = document.getElementById(`periodSelector-${index}`).value;
                                    let compl;
                                    let daily = [];
                                    let weekly = [];
                                    let monthly = [];
                                    daily[1] = 'SEGUNDA';
                                    daily[2] = 'TERÇA';
                                    daily[3] = 'QUARTA';
                                    daily[4] = 'QUINTA';
                                    daily[5] = 'SEXTA';
                                    monthly[1] = 'JANEIRO';
                                    monthly[2] = 'FEVEREIRO';
                                    monthly[3] = 'MARÇO';
                                    monthly[4] = 'ABRIL';
                                    monthly[5] = 'MAIO';
                                    weekly[1] = '1ª Semana';
                                    weekly[2] = '2ª Semana';
                                    weekly[3] = '3ª Semana';
                                    weekly[4] = '4ª Semana';
                                    weekly[5] = '5ª Semana';
                                    switch (period) {
                                        case 'daily':
                                          compl = daily[value] !== undefined ? daily[value] : '-'; 
                                        break;
                                        case 'monthly':
                                          compl = monthly[value] !== undefined ? monthly[value] : '-';
                                        break;
                                        
                                        case 'weekly':
                                          compl = weekly[value] !== undefined ? weekly[value] : '-';
                                        break;
                                    }
                                  
                                    return compl != undefined ? compl : value;
                                }
                            }
                        },
                        y1: {
                            type: 'linear',
                            position: 'left',
                            title: {
                                display: true,
                                text: 'Frequência Cardíaca Máxima (bpm)'
                            }
                        },
                        y2: {
                            type: 'linear',
                            position: 'right', 
                            grid: {
                                drawOnChartArea: false // Impede sobreposição com o y1
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Comparação de Frequência Cardíaca e Atividade Física'
                        }
                    }
                }
            });
        } else {
           heartActivityChart[index].data.labels     = refreshData.heartActivityChart.labels;
          heartActivityChart[index].data.datasets   = refreshData.heartActivityChart.data;
          heartActivityChart[index].update();

        }
  
        const ctxOxygen = document.getElementById(`oxygenChart-${index}`).getContext('2d');
        //ctxOxygen.destroy();
        if ( oxygenChart[index] === undefined ) {
          oxygenChart[index] = new Chart(ctxOxygen, {
            type: 'line',
            data: {
                labels: refreshData.oxygenChart.labels,
                datasets: refreshData.oxygenChart.data
            }, 
            options: {
              responsive: true,
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Período'
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: 'SPO2 %'
                  },
                }
              }
            }
        });
        } else {
          oxygenChart[index].data.labels     = refreshData.oxygenChart.labels;
          oxygenChart[index].data.datasets   = refreshData.oxygenChart.data;
          oxygenChart[index].update();
        }
          
        


        const ctxSteps = document.getElementById(`stepsChart-${index}`).getContext('2d');
        //ctxSteps.destroy();

          if ( stepsChart[index] === undefined ) {
            stepsChart[index] = new Chart(ctxSteps, {
                type: 'bar',
                data: {
                    labels: refreshData.stepsChart.labels,
                    datasets: refreshData.stepsChart.data
                },
                options: {
                  responsive: true,
                  scales: {
                    x: {
                      title: {
                        display: true,
                        text: 'Período'
                      },
                    },
                    y: {
                      title: {
                        display: true,
                        text: 'Quantidade de Passos'
                      },
                    }
                  }
               }
            });
          }  else {
            stepsChart[index].data.labels    = refreshData.stepsChart.labels;
            stepsChart[index].data.datasets  = refreshData.stepsChart.data;
            stepsChart[index].update();
          }

        const ctxHeartRate = document.getElementById(`heartRateChart-${index}`).getContext('2d');
        //ctxHeartRate.destroy();
          
        if ( heartRateChart[index] === undefined ) {
          heartRateChart[index] = new Chart(ctxHeartRate, {
              type: 'line',
              data: {
                  labels:   refreshData.heartRateChart.labels,
                  datasets: refreshData.heartRateChart.data
              },
              options: {
                responsive: true,
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: 'Período'
                    },
                  },
                  y: {
                    title: {
                      display: true,
                      text: 'Frequência Cardíaca (Máximo BPM)'
                    },
                  }
                }
              }
          });
        } else {
           heartRateChart[index].data.labels     = refreshData.heartRateChart.labels;
          heartRateChart[index].data.datasets    = refreshData.heartRateChart.data; 
          heartRateChart[index].update();
        }
          
        const ctxFreqResp = document.getElementById(`freqRespChart-${index}`).getContext('2d');
        if ( freqRespChart[index] === undefined ) {
          freqRespChart[index] = new Chart(ctxFreqResp, {
            type: 'line',
            data: {
                labels: refreshData.freqRespChart.labels,
                datasets: refreshData.freqRespChart.data
            },
            options: {
              responsive: true,
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Período'
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: 'MRM'
                  },
                }
              }
            }
        });
        } else {
          freqRespChart[index].data.labels     = refreshData.freqRespChart.labels;
          freqRespChart[index].data.datasets   = refreshData.freqRespChart.data;
          freqRespChart[index].update();
        }
          
        const ctxTempCorp = document.getElementById(`tempCorpChart-${index}`).getContext('2d');
        if ( tempCorpChart[index] === undefined ) {
          tempCorpChart[index] = new Chart(ctxTempCorp, {
            type: 'line',
            data: {
                labels: refreshData.tempCorpChart.labels,
                datasets: refreshData.tempCorpChart.data
            },
            options: {
              responsive: true,
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Período'
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: 'Temperatura Corporal Graus Celsius'
                  },
                }
              }
            }
        });
        } else {
          tempCorpChart[index].data.labels     = refreshData.tempCorpChart.labels;
          tempCorpChart[index].data.datasets   = refreshData.tempCorpChart.data;
          tempCorpChart[index].update();
        }
          
        const ctxExercicio = document.getElementById(`exercicioChart-${index}`).getContext('2d');
        if ( exercicioChart[index] === undefined ) {
          exercicioChart[index] = new Chart(ctxExercicio, {
            type: 'bar',
            data: {
                labels: refreshData.exercicioChart.labels,
                datasets: refreshData.exercicioChart.data
            },
            options: {
              responsive: true,
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Período'
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: 'Tempo em Minutos'
                  },
                }
              }
            },
            borderColor: 'red'
        });
        } else {
          exercicioChart[index].data.labels     = refreshData.exercicioChart.labels;
          exercicioChart[index].data.datasets   = refreshData.exercicioChart.data;
          exercicioChart[index].update();
        }
          
        const ctxCalorias = document.getElementById(`consumoCalChart-${index}`).getContext('2d');
        if ( consumoCalChart[index] === undefined ) {
          consumoCalChart[index] = new Chart(ctxCalorias, {
            type: 'line',
            data: {
                labels: refreshData.consumoCalChart.labels,
                datasets: refreshData.consumoCalChart.data
            },
            options: {
              responsive: true,
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Período'
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: 'Consumo em CAL'
                  },
                }
              }
            }
        });
        } else {
          consumoCalChart[index].data.labels     = refreshData.consumoCalChart.labels;
          consumoCalChart[index].data.datasets   = refreshData.consumoCalChart.data;
          consumoCalChart[index].update();
        }
          
        
        const ctxPeso = document.getElementById(`pesoChart-${index}`).getContext('2d');
        if ( pesoChart[index] === undefined ) {
          pesoChart[index] = new Chart(ctxPeso, {
            type: 'line',
            data: {
                labels: refreshData.pesoChart.labels,
                datasets: refreshData.pesoChart.data
            },
            options: {
              responsive: true,
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Período'
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: 'Oscilação em KG'
                  },
                }
              }
            }
        });
        } else {
          pesoChart[index].data.labels     = refreshData.pesoChart.labels;
          pesoChart[index].data.datasets   = refreshData.pesoChart.data;
          pesoChart[index].update();
        }
          
          
          
    }

function toggleModal(show, tpChart, indice) {
   let modal = document.getElementById("overlay");
   if ( show === true) {
     //modal.classList.remove('hidden'); 
     visualizar(tpChart, indice);
  } else {
    //modal.classList.add('hidden');
  }
  
}
  
   document.getElementById('overlay').addEventListener('click', (evt) => {
        const tags = ['INPUT', 'CANVAS', 'SELECT'];
        if ( !tags.includes(evt.target.tagName)  )
           toggleModal(false)
  }, false);

  
  
function visualizar(identificador, indice) {

  document.getElementById('selecionado').value = identificador;
  let aux = document.querySelectorAll(`#charts-${indice} > .col-3`)
  for( let i = 0; i < aux.length; i++)
    aux[i].classList.add('hidden');
  
  if ( identificador !== undefined) { 
      let elm         = document.querySelector(`#charts-${indice} > #${identificador}-${indice}`)
      elm.classList.remove('hidden');
      elm.classList.add('alinhar');
  }

}
  
  buscarPaciente();
  setTimeout(function() { 
      ordenarTabela('sort-freqcard', 'freqCard');
      ordenarTabela('sort-freqcard', 'freqCard');
   }, 500);
});
