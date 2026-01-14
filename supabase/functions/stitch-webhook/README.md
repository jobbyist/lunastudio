# Stitch webhook verification

## Signature verification

The Stitch Express webhook requests must include an `x-stitch-signature` header.
The signature is computed as:

1. Compute `HMAC-SHA256` using the shared secret `STITCH_WEBHOOK_SECRET` and the **raw** request body.
2. Hex-encode the resulting bytes in lowercase.
3. Send the hex string in the `x-stitch-signature` header.

If the header is missing, the function returns **HTTP 401**. If the signature is present
but does not match, the function returns **HTTP 403**.

## Supabase function environment variables

Register the shared secret as a Supabase Edge Function secret:

```bash
supabase secrets set STITCH_WEBHOOK_SECRET=your_shared_secret
```

You can also add it in the Supabase dashboard under **Project Settings → Edge Functions → Secrets**.
