import { prisma } from '@/lib/prisma'

import { userService } from './UserService';

class ReportService {
  async createReport(
    reporterId: string,
    reportedId: string,
    text: string,
  ): Promise<void> {
    const reporter = await userService.findOrCreate(reporterId);
    const reported = await userService.findOrCreate(reportedId);

    await prisma.report.create({
      data: {
        id: crypto.randomUUID().toString(),
        reporterId,
        reportedId,
        text,
      }
    })
  }
}

export const reportService = new ReportService();
