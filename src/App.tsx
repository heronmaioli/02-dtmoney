import { GlobalStyles } from './styles/global'
import { TransactionsProvider } from './hooks/useTransactions'
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
      <TransactionsProvider>
         <GlobalStyles />
         <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
         <NewTransactionModal
            isOpen={isNewTransactionModalOpen}
            onRequestClose={handleCloseNewTransactionModal}
         />

         <Dashboard />
      </TransactionsProvider>
   )
}
