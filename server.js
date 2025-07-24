import express from 'express';
import pkg from '@prisma/client';

const {PrismaClient} = pkg;
const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.post('/usuarios', async (req, res) => {
    try {
        const usuarioCriado = await prisma.user.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone
            }
        });
        res.status(201).json(usuarioCriado);
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).json({error_message: 'Erro ao criar usuário'});
    }
});

app.get('/usuarios', async (req, res) => {
    try {
        let users;

        if (req.query) {
            users = await prisma.user.findMany({
                where: {
                    id: req.query.id,
                    name: req.query.name,
                    email: req.query.email,
                    phone: req.query.phone
                }
            });
        } else {
            users = await prisma.user.findMany();
        }
        res.status(200).json(users);

    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).json({error_message: 'Erro ao buscar usuários'});
    }
});

app.put('/usuarios/:id', async (req, res) => {
    try {
        const usuarioAtualizado = await prisma.user.update({
            where: {
                id: req.params.id
            },
            data: {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone
            }
        });
        res.status(201).json(usuarioAtualizado);
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        res.status(500).json({error_message: 'Erro ao atualizar usuário'});
    }
});

app.delete('/usuarios/:id', async (req, res) => {
    try {
        await prisma.user.delete({where: {id: req.params.id}});
        res.status(200).json({
            message: `Usuário com ID ${req.params.id} foi excluído com sucesso!`,
            id: req.params.id
        });
    } catch (error) {
        console.error(`Erro ao deletar usuário com ID ${req.params.id}:`, error);
        res.status(500).json({error_message: `Erro ao deletar usuário com ID ${req.params.id}`});
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta: 3000');
});
