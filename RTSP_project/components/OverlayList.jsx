import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Plus } from 'lucide-react'
import { SendToBack } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { FileEdit } from 'lucide-react';
import Modal from './Modal'
import UpdateModal from './UpdateModal'

const OverlayList = () => {
  const [overlayList, setOverlayList] = useState([])
  const [open, setOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedOverlay, setSelectedOverlay] = useState({})

  const onModalOpen = () =>setModalOpen(true)

  const onModalClose = () =>setModalOpen(false)

  const onClose = () => setOpen(false)

  const onOpen = () => setOpen(true)

  useEffect(() => {
    const getList = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:5000/get');
        const data = await res.data
        setOverlayList(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getList();
  }, [open, modalOpen]);


  const onEditClick = (overlay) => {
    setSelectedOverlay(overlay);
    onModalOpen();
  };

  const onDeleteClick = async(overlay) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/delete/${overlay._id.$oid}`)
      toastr.success('Deleted overlay')
    } catch (error) {
      console.log(error)
      toast.error('Error deleting overlay')
    }
  };


  return (
    <div className='space-y-6'>
      <Modal open={open} onClose={onClose} />
      <UpdateModal open={modalOpen} data={selectedOverlay} onClose={onModalClose}/>
      <div className='flex items-center gap-32'>
        <h2 className='text-white font-semibold text-3xl'>Overlay List</h2>
        <button onClick={onOpen} className='btn btn-accent h-4'>
          <Plus />
          Add Overlay
        </button>
      </div>
      <div className='grid grid-cols-1 gap-y-3'>
        {overlayList.map((overlay) => (
            <div key={overlay.name} className="alert alert-info h-12 flex text-white  items-center justify-between">
              <div className='flex gap-x-4 items-center'>
              <SendToBack size={16} />
              <span>{overlay.name}</span>
              </div>
              <div className='space-x-6 mr-6'>
              <button onClick={()=>onEditClick(overlay)} className='w-4 h-4 bg-transparent'>
                <FileEdit size={16} />
              </button>
              <button onClick={()=>onDeleteClick(overlay)} className='w-4 h-4 bg-transparent'>
                <Trash2 size={16} className=' text-red-600' />
              </button>
              </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default OverlayList