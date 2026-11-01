"use client"

import { useEffect } from "react"
import { writeCart } from "@/components/cart"

// On the thank you page: the order is paid, empty the cart.
export function ClearCart() {
  useEffect(() => writeCart([]), [])
  return null
}
