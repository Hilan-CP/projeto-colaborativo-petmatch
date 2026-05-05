#!/bin/bash
set -e

setup_database() {
    local db=$1
    echo "  Configuring database '$db'..."
    
    # 1. Verifica se o banco existe. Se não, cria.
    # Usamos o psql -tAc para retornar apenas o valor puro
    local exists=$(psql -U "$POSTGRES_USER" -d postgres -tAc "SELECT 1 FROM pg_database WHERE datname='$db'")
    
    if [ "$exists" != "1" ]; then
        echo "    Database '$db' not found. Creating..."
        psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "postgres" -c "CREATE DATABASE \"$db\";"
    else
        echo "    Database '$db' already exists."
    fi

    # 2. Agora sim, cria o schema
    echo "    Creating schema 'reports' in '$db'..."
    psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$db" -c "CREATE SCHEMA IF NOT EXISTS reports;"
}

echo "Starting PetMatch Database Initialization..."

setup_database "db_petmatch"

echo "Database initialization finished successfully!"