# Exercício (<strike>07</strike> 14/03/2024):

A. Montem grupos de 3 a 6 pessoas.
   * 7 é muito. 2 é pouco. 1 sozinho nem a pau!

B. Vale nota! 1 ponto na média. É pouco, mas serve como aquecimento.

C. A ideia é que sejam os mesmos grupos que fiquem até o fim do semestre. Casos excepcionais serão resolvidos negociando com o professor caso a caso.

D. Seu grupo deve escolher uma e somente uma das atividades abaixo. Dois grupos não podem escolher a mesma atividade.

E. Crie um repositório no GitHub, acrescente todos os seus colegas de grupo e acrescente o professor também.

F. Crie um programa em Java e um em JavaScript de acordo com a atividade escolhida.
   * Os dois programas devem fazer a mesma coisa e ter o mesmo comportamento.
   * Qualquer que seja o exercício que o seu grupo escolheu, o roteiro em geral é pedir para o usuário digitar alguns dados, realizar algum trabalho com esses dados e então mostrar algum resultado ao usuário.
   * No JavaScript, use a função `prompt` para pedir a entrada do usuário.
   * No Java, use o método `nextLine()` do `Scanner` para pedr entrada do usuário.
   * No JavaScript, use o `console.log` para mostrar uma mensagem ao usuário.
   * No Java, use os métodos `System.out.print` e/ou `System.out.println` para mostrar uma mensagem ao usuário.
   * Não peça para o usuário digitar nada além do que foi pedido no enunciado do seu exercício.
   * Não mostre nada ao usuário que não seja somente o que foi pedido no enunciado do seu exercício.
   * Coloque uma função/método para executar um trabalho com os dados fornecidos pelo usuário e produzir um resultado.
   * Separe o código em duas funções/métodos: Uma que realize algum trabalho, sem interagir com o usuário e outra que interaja com o usuário, mas não faça nenhum trabalho.
   * No Java, o método que interage com o usuário é o `main`.
   * Se o seu exercício precisar do valor PI, em JavaScript é `Math.PI`. Em Java é `Math.PI`.

G. Coloque o seu arquivo Java e o seu arquivo JavaScript no seu repositório no GitHub.
   * Preste atenção no nome correto do seu arquivo Java.
   * Certifique-se de ter feito commit e push corretamente.

H. Não coloque arquivos a mais que não estejam no enunciado deste exercício.

I. Edite o arquivo `README.md` e coloque o seu nome nele. Todos os membros do grupo devem editar esse arquivo! O histórico de edições do GitHub mostrará se isso de fato ocorreu ou não. No fim, o arquivo deverá ter o nome de todos os integrantes.

J. Se alguém estiver em dois ou mais grupos, fica com nota zero!

# Atividades para o seu grupo escolher uma:

1 - Peça para o usuário digitar, em centímetros, o raio e a altura de um cilindro e calcule o seu volume em centímetros cúbicos. - NINGUÉM.
<br>

**2 - Peça para o usuário digitar, em centímetros, a altura, a largura e o comprimento de uma caixa de papelão em forma de paralelepípedo e calcule o volume da caixa em litros. - Ranielly, Iago e Vinicius Fideles.**

**3 - Peça para o usuário digitar o valor da resistência em ohms de dois resistores ligados em série e a voltagem (em volts) e calcule a intensidade da corrente elétrica (em ampères). - Alisson, Caio, Eric, Guilherme Denobi, Wersington e Walssington.**

**4 - Peça para o usuário digitar o número de produtos vendidos, o preço unitário de cada produto e o valor do frete e forneça o custo total da venda. - Davi, Arthur, Denise, Adriel e Luis Felipe.**

**5 - Peça para o usuário digitar o valor-hora de um funcionário, o número de dias trabalhados no mês e o número de horas trabalhadas por dia e calcule qual é o valor que lhe será pago. - Vitor, Gabriel Bráulio e Emily.**

**6 - Peça para o usuário digitar a velocidade em quilômetros POR HORA de um avião e a distância entre dois aeroportos em quilômetros e calcule a estimativa de quantos MINUTOS a viagem vai demorar. - Douglas Sousa, Otavio, Alex, Marcos, Adrian e Manoel.**

7 - Uma vaga de garagem ocupa 6 metros quadrados e precisa de mais 4 como espaço de manobra. Peça para o usuário digitar o número de andares de um prédio, o número de apartamentos por andar e calcule qual é a área do estacionamento. Cada apartamento tem direito a só uma vaga. - NINGUÉM.

**8 - Peça para o usuário, que é o dono de uma pizzaria, qual é o preço da pizza marguerita, da pizza calabreza e da pizza napolitana, quantas unidades de cada uma ele vendeu e dê o preço total das vendas realizadas. - Fernanda, Miguel, Kalliani, Giovanna, Cleber e Alexander.**

9 - Peça para o usuário digitar o valor do DIÂMETRO de uma esfera em centímetros e calcule o volume em centímetros cúbicos. - NINGUÉM.

**10 - Peça para o usuário digitar qual é o gasto de combustível em quilômetros por litro, o preço do litro de combustível e a distância percorrida e calcule o preço total do combustível. - Lucas, Myrele, Gabriel Dias e Guilherme Ferra.**

**11 - Peça para o usuário digitar quantos quartos tem um hotel, quanto tempo em minutos uma camareira demora para limpar o quarto e quantas camareiras estão trabalhando e calcule o tempo estimado para todos os quartos serem limpos. - Camila, Vinícius Monteiro e Jhonny.**

**12 - Peça para o usuário digitar quantas toneladas de grãos serão colhidas e a capacidade de cada caminhão que escoará a produção e dê uma estimativa de quantos caminhões serão necessários para escoar a produção. - Izabela, Derick e Ryan.**

Sem grupo - Washington, Douglas Rodrigues, Gustavo, João Victor, Luan, Luis Miguel, Taynara.

## Como ficaria o código:

Problema escolhido:

> Peça para o usuário digitar dois números e informe-lhe qual é o valor da soma desses dois números.

* Arquivo `Pedir2NumerosESomar.java`:

```java
import java.util.Scanner;

public class Pedir2NumerosESomar {
    public static void main(String[] args) {
        var scan = new Scanner(System.in);

        System.out.print("Digite o primeiro número: ");
        var a = Integer.parseInt(scan.nextLine());

        System.out.print("Digite o segundo número: ");
        var b = Integer.parseInt(scan.nextLine());

        var resultado = somar(a, b);
        System.out.println("O resultado é " + resultado);
    }

    public static double somar(double a, double b) {
        return a + b;
    }
}
```

* Arquivo `Pedir2NumerosESomar.js`:

```js
"use strict";

function pedirSomar() {
    let a = prompt("Digite o primeiro número:") * 1;
    let b = prompt("Digite o segundo número:") * 1;
    let resultado = somar(a, b);
    console.log("O resultado é " + resultado);
}

function somar(a, b) {
    return a + b;
}

pedirSomar();
```
