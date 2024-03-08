# Spóznawanje rěče - hłowna aplikacija

## Container twarić

```code
docker build -f docker/Dockerfile -t offline_transcription .
```

## Serwer-container twarić

Hlej dokumentacija za serwer: [tule](https://github.com/ZalozbaDev/uploader-recny-model-serwer) 

## Zwisk na serwer nastajić

```code
cp docker/env.example .env
```

Zapisaće do dataju ".env" URL wašeho serwera.

## Container wuwjesć

Wobdźěłaće dataju "docker-compose.yml" a přiměriće nastajenja za aplikaciju a serwer.

Potom móžeće conaineraj wuwjesć: 

```code
docker-compose up -d
```

# Licenca

Hlej dataja "LICENSE".

