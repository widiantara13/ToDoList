import Task from '../model/Model.js';
import { Op } from 'sequelize';
import { startOfDay, endOfDay } from 'date-fns';

export const getTask =  async (req, res) => {
    const mulai = startOfDay(new Date());
    const akhir = endOfDay(new Date());
    try {
        const response = await Task.findAll({
            where: {
                createdAt: {
                    [Op.between]: [mulai, akhir]
                }
            },
            order: ['createdAt', 'DESC']
        });
        res.status(200).json({
            msg: 'Berhasil tampilkan data',
            data: response
        });
        console.log(mulai);
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
        console.log(error.message);
    };
};

export const getTaskById = async (req, res) => {
    try {
        const response = await Task.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            msg: "Berhasil tampilkan sebuah data",
            data: response
        });

    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
        console.log(error.message);
    };
};

export const addTask = async (req, res) => {
    const {title, desc} = req.body;
    try {
        await Task.create({
            title : title,
            desc: desc
        });
        res.status(201).json({
            msg: 'Berhasil menambahkan data'
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
        console.log(error.message);
    };
};

export const updateTask = async (req, res) => {
    const response = await Task.findOne({
        where: {
            id: req.params.id
        }
    });
    if(!response){
        res.status(404).json({
            msg: "Data tidak ditemukan"
        });
    };
    try {
        await Task.update(req.body,{
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({
            msg: "Berhasil update list"
        })
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
        console.log(error.message);
    };
};
export const deleteTask = async (req, res) => {
    const response = await Task.findOne({
        where: {
            id: req.params.id
        }
    });
    if(!response){
        res.status(404).json({
            msg: "Data tidak ditemukan"
        });
    };
    try {
        await Task.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            msg: "Berhasil menghapus data"
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
        console.log(error.message);
    };
    
};