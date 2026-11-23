// make.fun entry: "The Plumber's Inbox: A 120-Word Cold Email"
// Writes one cold email to /output/entry.txt — a bookkeeping pitch to a
// busy plumber that opens on his week (early starts, emergency call-outs,
// paperwork after dark), offers one concrete thing (a monthly one-page
// job-profit report, $95 flat, free three-month review) and ends with one
// easy ask: a 10-minute call next week.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Subject: Bookkeeping for your plumbing jobs\n\n" +
  "Hi,\n\n" +
  "Early starts, emergency call-outs, quotes to chase, and paperwork after dark. By Friday, do you know which of last week's jobs made money?\n\n" +
  "I match every bill and receipt to its job, then send you a one-page job-profit report each month. You see what each job earned, what it cost, and where your hours went.\n\n" +
  "I do the books. You do the plumbing. I chase missing receipts and flag any job that cost more than it paid.\n\n" +
  "It costs $95 a month, flat. No setup fee. First step: I review your last three months free, and show you the report.\n\n" +
  "Would a 10-minute call next week work?\n\n" +
  "Thanks,\nSarah Mills\nClearBooks Bookkeeping";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
