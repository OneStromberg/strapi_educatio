import axios from 'axios';
require('dotenv').config();

async function createAdminToken() {
    try {
        const response = await axios.post(`${process.env.HOST}/admin/users-permissions/init`, {
            identifier: 'eddos',
            password: process.env.ADMIN_PASSWORD
        });

        const { jwt } = response.data;
        console.log('Admin token:', jwt);
    } catch (error) {
        console.error('Error creating admin token:', error);
    }
}

createAdminToken();