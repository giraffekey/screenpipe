export class PipesManager {
  async list(): Promise<string[]> {
    try {
      const response = await fetch("http://localhost:3030/pipes/list", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error("failed to list pipes:", error);
      return [];
    }
  }

  async download(url: string): Promise<void> {
    try {
      const response = await fetch("http://localhost:3030/pipes/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url,
        }),
      });

      return response.ok;
    } catch (error) {
      console.error("failed to download pipe:", error);
      return false;
    }
  }

  async enable(pipeId: string): Promise<void> {
    try {
      const response = await fetch("http://localhost:3030/pipes/enable", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pipe_id: pipeId,
        }),
      });

      return response.ok;
    } catch (error) {
      console.error("failed to enable pipe:", error);
      return false;
    }
  }

  async disable(pipeId: string): Promise<void> {
    try {
      const response = await fetch("http://localhost:3030/pipes/disable", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pipe_id: pipeId,
        }),
      });

      return response.ok;
    } catch (error) {
      console.error("failed to disable pipe:", error);
      return false;
    }
  }

  async update(
    pipeId: string,
    config: { [key: string]: string },
  ): Promise<void> {
    try {
      const response = await fetch("http://localhost:3030/pipes/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pipe_id: pipeId,
          config,
        }),
      });

      return response.ok;
    } catch (error) {
      console.error("failed to update pipe:", error);
      return false;
    }
  }
}
