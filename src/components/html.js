import React from 'react';

const Html = ({ body, head = "", before_body_end = "" }) => {
    return (
        <html lang="it">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
                <meta http-equiv="Pragma" content="no-cache" />
                <meta http-equiv="Expires" content="0" />
                <script src="https://cdn.tailwindcss.com"></script>
                { head }
            </head>
            <body>
                { body }
                { before_body_end }
            </body>
        </html>
    )
  }

export default Html;