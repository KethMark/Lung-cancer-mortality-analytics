'use client'
import React from 'react'
import { columnsPatient, Patient } from './columns'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { DataTable } from '../../../components/data-table'
import { initialDataPatients } from '@/lib/data'

const fetchPatients = async (): Promise<Patient[]> => {
  const { data } = await axios.get('/api/information/patients')
  return data
}

const page = () => {
  const { data: patients, isLoading, error } = useQuery({
    queryKey: ['patients'],
    queryFn: fetchPatients,
    initialData: initialDataPatients
  })

  return (
    <div>
      {patients && <DataTable data={patients} columns={columnsPatient}/>}
    </div>
  )
}

export default page