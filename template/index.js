import express from 'express';
import app from './server/server';

app.use(express.static('client'));
app.on('started', () => {
  const baseUrl = app.get('url').replace(/\/$/, '');
  console.log('Browse your CLIENT files at %s', baseUrl);
});

if (require.main === module) { app.start(); }

export default app;
