import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <button><Link class="btn-primary" to="/admin/danh-sach-nap-the">Danh sach nap the</Link> </button>
    </div>
  )
}

export default Dashboard