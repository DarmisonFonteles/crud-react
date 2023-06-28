'use client'
import Botao from '@/components/Botao'
import Formulario from '@/components/Formulario'
import Layout from '@/components/Layout'
import Tabela from '@/components/Tabela'
import Cliente from '@/core/Cliente'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela') 

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 23, '4'),
    new Cliente('Pedro', 54, '5'),
  ]

  function selecaocliente(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }

  function Excluircliente(cliente: Cliente) {
    console.log(cliente.nome)
  }


  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
    setVisivel('tabela')
  }


  return (
    
    <div className={`flex h-screen justify-center items-center bg-gradient-to-r from-purple-500 to-blue-600 text-white`}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className='flex justify-end'>
              <Botao cor='green' className='mb-4'
                onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela 
              clientes={clientes} 
              clienteSelecionado={selecaocliente}
              clienteExcluido={Excluircliente}
              />
          </>
        ): (
          <Formulario 
            cliente={cliente} 
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')} 
          /> 
        )}
      </Layout>
    </div>
  )
}
