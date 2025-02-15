import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/leads", async (req, res) => {
    try {
      const lead = insertLeadSchema.parse(req.body);
      const result = await storage.createLead(lead);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: "Invalid form data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
