let queue = []
let option = true

while (option !== '3') {
    let menu = 'Fila de espera:\n'

    if (queue.length === 0) {
        menu += 'Nenhum paciente na fila.\n'
    } else {
        for (let i = 0; i < queue.length; i++) {
            menu += `${i + 1}º ${queue[i]}\n`
        }
    }

    menu += '\nEscolha uma opção:\n'
    menu += '1 - Novo paciente\n'
    menu += '2 - Consultar paciente\n'
    menu += '3 - Sair\n'

    option = prompt(menu)

    switch (option) {
        case '1':
            let newPatient = prompt('Digite o nome do novo paciente:')
            queue.push(newPatient)
            break
        case '2':
            if (queue.length === 0) {
                alert('Não há pacientes na fila.')
            } else {
                let consultedPatient = queue.shift()
                alert(`Paciente consultado: ${consultedPatient}`)
            }
            break
        case '3':
            alert('Programa encerrado.')
            break
        default:
            alert('Opção inválida!')
            break
    }
}
