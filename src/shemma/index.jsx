import React from 'react'
import * as Yup from "yup"

export const Myschema = Yup.object({
    name:Yup.string().min(3).max(20).required("name is invalid"),
    Lastname :Yup.string().min(2).required("Last name is invalid"),
    email:Yup.string().required("invalid your email"),
    password:Yup.string().min(8).required("invaqlid password")
})
 

