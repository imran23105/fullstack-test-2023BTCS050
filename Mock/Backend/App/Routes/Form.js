import express from 'express'
import { setform } from '../Controlles/Form.js'

const formRoutes=express()
formRoutes.post('/add',setform);
 
export default formRoutes;