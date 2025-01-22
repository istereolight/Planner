import { Button } from '@/components/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { updateCells } from './plannerSlice';

const hostUrl = 'http://172.29.92.56:3000';

export const FilePannel = () => {
  const cells = useSelector(state => state.planner.cells);
  const dispatch = useDispatch()


  const handleUpload = (e) => {
    const formData = new FormData();
    formData.append('data', e.target.files[0])

    axios.post(`${hostUrl}/upload`,
      formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    ).then(() => {
      axios.get(`${hostUrl}/cells`)
        .then((res) => {
          dispatch(updateCells(res.data))
    })
    })
    .catch(function () {
      console.log('FAILURE!!');
    });
  }

  const handleDownload = () => {
    axios.post(`${hostUrl}/update`, {
      cells: JSON.stringify(cells),
    })
      .then( async () => {
        const response = await fetch(`${hostUrl}/download`)
        if (response.status === 200) {
          const blob = await response.blob();
          const downloadUrl = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = downloadUrl;
          link.download = 'data.json';
          link.click();
          link.remove();
        }
      })
  };

  return (
    <div className='mt-10'>
      <div className='mt-10 mb-3'>
        <span>Импорт расстановки:</span>
      </div>
      <div>
        <input type='file' accept='.json' onChange={handleUpload} />
        <Button variant='secondary' onClick={handleDownload}>Экспорт расстановки</Button>
      </div>
    </div>
  )
}
