import { GlobalStyles } from './styles/global'
import Modal from 'react-modal'

import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { useState } from 'react'
import { NewTransactionModal } from './components/NewTransactionModal'

Modal.setAppElement('#root')
export function App() {
   const [isNewTransactionModalOpen, setIsNewTransactionMoldaOpen] = useState(false)

   function handleOpenNewTransactionModal() {
      setIsNewTransactionMoldaOpen(true)
   }
   function handleCloseNewTransactionModal() {
      setIsNewTransactionMoldaOpen(false)
   }

   return (
      <>
         <GlobalStyles />
         <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
         <NewTransactionModal
            isOpen={isNewTransactionModalOpen}
            onRequestClose={handleCloseNewTransactionModal}
         />

         <Dashboard />
      </>
   )
}
