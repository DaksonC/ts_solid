# SOLID

Robert C. Martin, um renomado engenheiro de software também conhecido como "Uncle Bob". É um autor e palestrante amplamente respeitado na comunidade de desenvolvimento de software, e ele articulou os princípios SOLID em seu livro "Agile Software Development: Principles, Patterns, and Practices". Esses princípios foram desenvolvidos como diretrizes para ajudar os desenvolvedores a escreverem código mais limpo, flexível e fácil de manter.

## SRP (Single Responsibility Principle - Princípio da Responsabilidade Única):

- Uma classe deve ter apenas uma razão para mudar, ou seja, deve ter apenas uma responsabilidade.

## OCP (Open/Closed Principle - Princípio Aberto/Fechado)

- As entidades de software (classes, módulos, funções, etc.) devem estar abertas para extensão, mas fechadas para modificação. Isso significa que você deve poder estender o comportamento de uma classe sem modificar seu código-fonte.

## LSP (Liskov Substitution Principle - Princípio da Substituição de Liskov):

- Subtipos devem ser substituíveis por seus tipos de base sem alterar a correção do programa. Em outras palavras, objetos de uma classe derivada devem poder ser substituídos por objetos de sua classe base sem interromper o funcionamento do programa.

## ISP (Interface Segregation Principle - Princípio da Segregação de Interfaces):

- Muitas interfaces específicas são melhores do que uma interface geral. Isso significa que você deve dividir interfaces grandes em interfaces menores e mais específicas para que as classes só precisem implementar os métodos que realmente utilizam.

## DIP (Dependency Inversion Principle - Princípio da Inversão de Dependência):

- Deve-se depender de abstrações, não de implementações concretas. Em outras palavras, os módulos de alto nível não devem depender de módulos de baixo nível, ambos devem depender de abstrações.
