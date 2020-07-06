console.log('middleware'.brightMagenta)

exports.request_logger = (req, res, next) => {
  if (req.method === 'POST') {
    let body = req.body


    console.log(body)
  } else if (req.method !== undefined) {

    console.log(req.body);
    let periods = "..";
    console.log(
      `\n.\n..`.magenta,
      `<~${req.method.magenta}~>${periods.magenta} request to ${
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
  } else {
    log("~req.method undefined".red[reqlogger]);
  }
  const logobj = () => {
    if (req != undefined) {
      let obj = {
        a: req.url.magenta,
        b: req.headers.blue,
        ff: req.params.blue,
        f: req.method.magenta,
      };
      return obj;
    }
  };
  const consolereqs = logobj();
  console.assert(consolereqs.a, consolereqs.b, consolereqs.f, consolereqs.ff);

  next();
}