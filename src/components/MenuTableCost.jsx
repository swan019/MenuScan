"use client";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import React from 'react'
import { useSelector } from "react-redux";


function MenuTableCost({ Data, User }) {
    const NA = "None"
    return (
        <Table>
            <TableCaption className="text-base font-medium">A list of Menus In <span className="text-orange-500"> {User.storeName} </span> .</TableCaption>
            <TableHeader className="bg-slate-200" >
                <TableRow>
                    <TableHead className="w-[50px]    text-center">ID</TableHead>
                    <TableHead className="text-center">Category</TableHead>
                    <TableHead className="text-center">Menu</TableHead>
                    <TableHead className="text-center">Half Plate</TableHead>
                    <TableHead className="text-center">Full Plate</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>

                {Data.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium text-center">{index + 1}</TableCell>
                        <TableCell className="text-center">{item.category}</TableCell>
                        <TableCell className="text-center">{item.name}</TableCell>
                        <TableCell className="text-center">{item?.halfPrice || "None"} {item?.halfPrice && <span>Rs.</span>}</TableCell>
                        <TableCell className="text-center">{item.fullPrice} <span>Rs.</span> </TableCell>
                    </TableRow>

                ))}
            </TableBody>
        </Table>
    )
}

export default MenuTableCost
