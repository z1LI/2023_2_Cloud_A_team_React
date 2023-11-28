import axios from 'axios'
import React, { useRef, useEffect } from 'react';
import { createHashHistory } from 'history'
import { Modal } from 'antd'

let history = createHashHistory()

export const goto = (path) => {
    history.push(path)
}
