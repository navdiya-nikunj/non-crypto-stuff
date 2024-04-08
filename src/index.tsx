import { serveStatic } from '@hono/node-server/serve-static'
import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'

export const app = new Frog({
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

app.use('/*', serveStatic({ root: './public' }))

app.frame('/', (c) => {
  const { buttonValue, status } = c
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background: '#A32CC4',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            alignItems: 'center',
          }}
        > 
          <img src='https://github.com/navdiya-nikunj/non-crypto-stuff/blob/main/warpcast.png?raw=true' width={600} height={400} />
          
            {`Welcome to /non-crypto-stuff 🤖`}
        </div>
      </div>
    ),
    intents: [
      <Button action="/warpcast" value="Warpcast">Warpcast</Button>,
      <Button.Link href="https://warpcast.com/~/channel/non-crypto-stuff">Join Channle</Button.Link>,
    ],
  })
})

app.frame('/warpcast', (c) => {
  const { status } = c
  return c.res({
    image: (
        <div 
        style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            height: '100%',
            justifyContent: 'center',
            textAlign: 'center',
            width: '100%',
            background: '#A32CC4',
            color: 'white',
            padding: '50px 120px',
            gap: 40,
          }}
        >
          <h1
            style={{
              fontSize: 80,
            }}
          >Warpcast</h1>
          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'nowrap',
              height: '100%',
              justifyContent: 'center',
              textAlign: 'left',
              width: '100%',
              fontSize: 40,
              gap: 20,
            }}
          >
            <li>👉 Imagine a social media platform where you control your data and who sees your posts.
</li>

<li>👉
That's Warpcast: Connect with friends, follow interesting people, and share ideas in an open and censorship-resistant environment.
</li>

<li>
  👉 Warpcast is a decentralized, open source, and censorship-resistant social media platform.
</li>

          </ul>
        </div>
      ),
      intents: [
        <Button.Link href="https://youtu.be/nlETCA0TAMU?feature=shared">Create Account</Button.Link>,
        <Button.Link href="https://youtu.be/tQIZjVUAmgY?feature=shared">Use Warpcast</Button.Link>,
        <Button.Link href="https://docs.farcaster.xyz/">Docs 🔍</Button.Link>,
        <Button action='/'>Home</Button>,
      ],
    })
  }
)


devtools(app, { serveStatic })
