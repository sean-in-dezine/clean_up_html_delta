console.log("middleware".brightMagenta);
let loggerMW = require("./cuteConsoleSnippets");
loggerMW = loggerMW.loggerMW;
// loggerMW = loggerMW.loggerMW
exports.request_logger = (req, res, next) => {
  if (req.method === undefined) {
    console.log("houston we have a problem");
  } else if (req.method !== undefined) {
    new Promise((resolve, reject) => {
      loggerMW(req, res, next);
    }).catch((err) => console.log(err));
  } else if (req.method !== undefined) {
  } else if (req.method === "POST") {
    let body = req.body;
    if (body !== undefined) {
      console.log(body);
    } else if (body === undefined) {
      console.log(`body is still ${body}`);

      console.log("~req.method undefined".red[reqlogger]);
    }
  }

  next();
};

// const logobj = () => {

//   a: req.url.magenta
//   b: req.headers.blue
//   ff: req.params.blue
//   f: req.method.magenta
// };

// const consolereqs = logobj();
// console.assert(consolereqs.a, consolereqs.b, consolereqs.f, consolereqs.ff);
