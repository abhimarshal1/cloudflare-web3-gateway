# cloudflare-web3-gateway
Creates/Updates dnslink for a web3 gateway

## Example

```yml
- name: Update DNS Link via Cloudflare
  id: cloudflare-dnslink
  uses: resource-network/cloudflare-update-dnslink@v2
  with:
    token: ${{ secrets.CLOUDFLARE_TOKEN }}
    zone: ${{ secrets.CLOUDFLARE_ZONE }}
    hostname: "ipfs.example.com"
    dnslink: 'ipns/ipns.example.com' # you can also use 'ipfs/Qm....../'
```

Note: Please make sure the token has all the necessary permissions.
