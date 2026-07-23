# 🗄️ Estrutura do Banco de Dados

## Tabelas

### usuarios
```sql
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) UNIQUE NOT NULL,
  senha VARCHAR(255) NOT NULL,
  nome VARCHAR(100) NOT NULL,
  loja_id INT,
  tipo ENUM('admin', 'loja'),
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### lojas
```sql
CREATE TABLE lojas (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  telefone VARCHAR(20),
  endereco TEXT,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### servicos
```sql
CREATE TABLE servicos (
  id SERIAL PRIMARY KEY,
  loja_id INT NOT NULL REFERENCES lojas(id),
  tipo ENUM('banho', 'tosa') NOT NULL,
  quantidade INT NOT NULL,
  data DATE NOT NULL,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Dados Iniciais

```sql
INSERT INTO lojas (nome, telefone, endereco) VALUES
('Loja 1', '(11) 1234-5678', 'Rua A, 123'),
('Loja 2', '(11) 1234-5679', 'Rua B, 456'),
('Loja 3', '(11) 1234-5680', 'Rua C, 789'),
('Loja 4', '(11) 1234-5681', 'Rua D, 101');
```