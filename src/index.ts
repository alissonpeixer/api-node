
import fs from 'node:fs';
import path from 'node:path';
import fastify, { FastifyInstance } from 'fastify';

import { ITRouter } from './interface/router';




const swaggerOptions = {
  swagger: {
    info: {
      title: "Marte API",
      description: "",
      version: "1.0.0",
    },
    host: "192.99.119.152:8080",
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [{ name: "User", description: "Rotes user" }],
  },
};

const swaggerUiOptions = {
  routePrefix: "/docs",
  exposeRoute: true,
  theme: {
    title: 'MarteAPI Doc'
  }
};


class App {

  app: FastifyInstance = fastify();

  constructor() {
    this.start();
  }

  private async start() {
    this.registers();
    this.startServer();

  }


  private async createdRouter() {
    fs.readdirSync(path.join(__dirname, 'router')).map((router) => {
      try {
        if (router !== 'util') {
          if (router.endsWith('.ts')) {
            const read: ITRouter = require(path.join(__dirname, `router`, router));

            if (read.path && read.method) {
              console.log("CREATED ROUTER=> " + read.path + ' => Method: ' + read.method)
              this.app.route(read as any);
            } else {
              console.log(" ");
              console.log(`DANGER ${router} =>  Path and method are required and not file router!`);
              console.log(`INFO => Use the "Util" folder to place other files!`);
              console.log(" ");
            }

          } else {

            fs.readdirSync(`${__dirname}/router/${router}`).map((file) => {
              if (file.endsWith('.ts')) {
                const read: any = require(path.join(__dirname, `router/${router}`, file));

                if (read.path && read.method) {
                  console.log("CREATED ROUTER=> " + read.path + ' => Method: ' + read.method)
                  this.app.route(read as any);
                } else {
                  console.log(" ");
                  console.log(`DANGER ${file} =>  Path and method are required and not file router!`);
                  console.log(`INFO => Use the "Util" folder to place other files!`);
                  console.log(" ");
                }
              }
            })
          }
        }
      } catch (error) {
        console.log(error)
      }
    });
  }



  private async registers() {

    await this.app.register(import('@fastify/jwt'), {
      secret: '12312ASVC'
    });

    await this.app.register(import('@fastify/cors'), {
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    });

    await this.app.register(import('fastify-bcrypt'), {
      saltWorkFactor: 12
    });

    await this.app.register(import('@fastify/rate-limit'), {
      global: true,
      max: 100,
      timeWindow: 1000
    });

    await this.app.register(import('fastify-qs'), {});

    await this.app.register(import('@fastify/swagger'), swaggerOptions);
    await this.app.register(import('@fastify/swagger-ui'), swaggerUiOptions);

    await this.app.register((app, options, done) => {
      this.createdRouter();
      done();
    });

  }




  private startServer() {
    this.app.listen({ port: 8080, host: '0.0.0.0' }, (err, address) => {
      if (err) {
        console.error(err)
        process.exit(1)
      }

      console.log(`Server listening at ${address}`)
    });
  }


}

const classApp = new App();

export default classApp.app;

