import toast, { Toaster } from 'react-hot-toast';


export default function Toast() {
    const notify = () => toast.success('Here is your toast.');


    
  return (
    <div>T
<button onClick={notify}>Make me a toast</button>
        oast
<Toaster />
        </div>
  )
}

