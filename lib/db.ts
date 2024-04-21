require('server-only')
import { config } from '@/config/config';
//Prisma Database
import {Prisma, PrismaClient} from '@prisma/client'

declare global {
    var prisma: PrismaClient
}

let prisma: PrismaClient

const logOptions : Prisma.LogDefinition[] = [
    { level: 'query', emit: 'event' },
    { level: 'warn', emit: 'event' },
    { level: 'info', emit: 'event' },
    { level: 'error', emit: 'event' },
];

if (config.NODE_ENV === "production"){
    prisma = new PrismaClient({
        log: logOptions,
    });

}else {
    if(!global.prisma){
        global.prisma = new PrismaClient({
            log: logOptions,
        });
    }
    prisma = global.prisma

}

export const db = prisma;