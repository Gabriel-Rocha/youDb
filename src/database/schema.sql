CREATE DATABASE ceps;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS ceps (
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    cep VARCHAR UNIQUE,
    logradouro VARCHAR,
    complemento VARCHAR,
    bairro VARCHAR,
    localidade VARCHAR,
    uf VARCHAR,
    ibge VARCHAR,
    gia VARCHAR,
    ddd VARCHAR,
    siafi VARCHAR
);
