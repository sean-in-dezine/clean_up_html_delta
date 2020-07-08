exports.loggerMW = (req, res, next) => {
    console.log(
        `\n.\n..`.magenta,
        `<~${req.method.magenta}~> request to ${
              req.url.magenta
            }  \nfrom ip ${req.ip.blue} \nfull: ${req.protocol.yellow}://${
              req.get("host").yellow
            }${req.originalUrl.yellow} \n${res.statusCode} ${
              res.statusMessage
            } \ncomplete: ${
              res.req.complete.toString().magenta
            } \nrequest body:${JSON.stringify(res.req.body)} `,
        `\n.`.magenta
      ); 
        }


