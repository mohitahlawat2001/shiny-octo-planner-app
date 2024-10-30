import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../styles/IPAddressWidget.css'

const IPAddressWidget = () => {
    const [loading, setLoading] = useState(true); 
    const [ipv4, setIpv4] = useState(""); 
    const [ipv6, setIpv6] = useState(""); 
    const [country, setCountry] = useState(""); 

    const ipv4Url = 'https://api.ipify.org?format=json'
    const ipv6Url = 'https://api6.ipify.org?format=json'
    const countryUrl = 'https://speed.cloudflare.com/meta'

    const getData = () => {
        axios.get(ipv4Url).then((res) => setIpv4(res.data))
        axios.get(ipv6Url).then((res) => setIpv6(res.data))
        axios.get(countryUrl).then((res) => setCountry(res.data))
    }

    useEffect(() => getData(), [])

  return (
    <div className='ip-container'>
        <h1 className='ip-head'>Your IP Address Details! </h1>
        <h2><span className='ip-subhead'>IPv4 Address:</span> {ipv4 && ipv4["ip"]}</h2>
        <h2><span className='ip-subhead'>IPv6 Address:</span> {ipv6 && ipv6["ip"]}</h2>
        <h2><span className='ip-subhead'>Location:</span> {country && country["city"]}, {country && country["country"]}</h2>
    </div>
  )
}

export default IPAddressWidget