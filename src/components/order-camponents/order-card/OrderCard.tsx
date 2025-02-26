import { IOrderItem } from '@/type/serverTypes'
import React from 'react'

interface IOrderCardProps {
    orderItem: IOrderItem
}

const OrderCard = ({orderItem}: IOrderCardProps) => {
  return (
    <div>OrderCard</div>
  )
}

export default OrderCard