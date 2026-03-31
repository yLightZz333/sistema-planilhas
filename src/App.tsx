/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  CheckCircle2, 
  Clock, 
  BarChart3, 
  Package, 
  TrendingUp, 
  Briefcase, 
  Calendar, 
  Zap, 
  ShieldCheck, 
  ChevronDown, 
  Star,
  Download,
  CreditCard,
  Rocket,
  FileText,
  Presentation,
  Mail,
  Lightbulb,
  XCircle,
  MousePointer2,
  Check,
  LayoutGrid,
  AlertTriangle,
  ArrowLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left font-semibold text-gray-900"
      >
        <span>{question}</span>
        <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="mt-2 text-gray-600"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

export default function App() {
  const [view, setView] = useState<'landing' | 'upgrade'>('landing');
  const today = new Date().toLocaleDateString('pt-BR');

  useEffect(() => {
    if (view === 'upgrade') {
      window.scrollTo(0, 0);
    }
  }, [view]);

  if (view === 'upgrade') {
    return (
      <div className="min-h-screen bg-white font-sans text-gray-900 pb-20 overflow-x-hidden">
        {/* Fixed Header for Upgrade */}
        <div className="bg-red-600 py-2 text-center text-xs font-bold uppercase tracking-widest text-white">
          DESCONTO ESPECIAL LIBERADO!
        </div>

        <div className="mx-auto max-w-2xl px-6 pt-12 text-center">
          <div className="inline-block rounded-lg bg-red-600 px-6 py-2 text-xl font-black text-white shadow-lg">
            ESPERE!
          </div>
          
          <h2 className="mt-8 text-2xl font-black leading-tight sm:text-4xl text-gray-900">
            TEMOS UM <span className="text-green-600">DESCONTO ESPECIAL</span> PARA<br />
            UPGRADE DE PLANO
          </h2>

          <div className="mt-12 overflow-hidden rounded-3xl bg-white text-gray-900 shadow-2xl ring-1 ring-gray-200">
            {/* Card Header */}
            <div className="bg-green-600 py-6 text-white">
              <div className="flex justify-center gap-0.5 text-white">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
              </div>
              <h3 className="mt-2 text-2xl font-black uppercase tracking-tight sm:text-3xl">
                SISTEMA COMPLETO PRO
              </h3>
              <p className="mt-1 text-xs font-medium opacity-90">
                O pacote definitivo para quem quer dominar o Excel e Google Planilhas.
              </p>
            </div>

            <div className="p-8 sm:p-12">
              <div className="aspect-video overflow-hidden rounded-2xl bg-gray-100 shadow-inner">
                <img 
                  src="https://picsum.photos/seed/upgrade-spreadsheet/800/450" 
                  alt="Upgrade Preview" 
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mt-10 text-center">
                <p className="text-sm font-bold text-gray-400 line-through">De R$ 19,90</p>
                <p className="text-5xl font-black text-gray-900 sm:text-6xl">R$ 14,90</p>
              </div>

              <div className="mt-10 space-y-4 text-left">
                {[
                  { title: "SISTEMA COMPLETO COM TODAS AS PLANILHAS", desc: "Acesso total ao nosso guia principal com todas as planilhas testadas e aprovadas." },
                  { title: "BÔNUS: TEMPLATES EXTRAS", desc: "Receba um guia adicional com mais modelos exclusivos para diversificar seu uso." },
                  { title: "7 DIAS DE GARANTIA", desc: "Teste o conteúdo por 7 dias. Se não gostar, devolvemos seu dinheiro sem perguntas." },
                  { title: "ACESSO VITALÍCIO", desc: "Você terá acesso para sempre, para consultar quando quiser em qualquer dispositivo." },
                  { title: "SUPORTE PRIORITÁRIO", desc: "Uma seleção de suporte que não está no guia básico para você se destacar." },
                  { title: "ATUALIZAÇÕES FUTURAS", desc: "Receba todas as novas planilhas e atualizações do material sem custo adicional." },
                  { title: "FÓRMULAS PARA ECONOMIZAR HORAS", desc: "Aprenda como automatizar seus processos e lucrar muito mais." },
                  { title: "GUIA: COMO GANHAR DINHEIRO COM PLANILHAS", desc: "Aprenda estratégias reais para monetizar seu conhecimento em planilhas." },
                  { title: "4.000 MODELOS PARA WORD", desc: "Uma biblioteca gigantesca de modelos prontos para documentos no Word." },
                  { title: "50.000 SLIDES PARA POWER POINT", desc: "A maior coleção de slides profissionais para suas apresentações." },
                  { title: "300 TEMPLATES PROPOSTAS COMERCIAIS", desc: "Modelos profissionais de propostas para fechar mais negócios." },
                  { title: "ACESSO IMEDIATO", desc: "Receba seu material imediatamente após a confirmação do pagamento." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-green-100 text-green-600">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-tight text-gray-900">{item.title}</h4>
                      <p className="text-[10px] leading-relaxed text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-12 w-full rounded-2xl bg-green-600 py-5 text-lg sm:text-xl font-black uppercase tracking-tight text-white shadow-[0_10px_30px_rgba(22,163,74,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap">
                QUERO GARANTIR AGORA!
              </button>

              <div className="mt-6 flex flex-col items-center gap-4">
                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500">
                  <AlertTriangle className="h-3 w-3 text-yellow-500" />
                  Oferta exclusiva disponível apenas nesta página
                </div>
                <button 
                  onClick={() => setView('landing')}
                  className="text-xs font-bold text-gray-400 underline decoration-gray-300 underline-offset-4 transition-colors hover:text-gray-600 cursor-pointer"
                >
                  Não Obrigado, eu quero o plano básico de R$10
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center gap-6 opacity-60">
            <div className="flex items-center gap-2 text-[10px] font-medium">
              <ShieldCheck className="h-3 w-3" />
              Pagamento 100% seguro via Greenn
            </div>
            <button 
              onClick={() => setView('landing')}
              className="flex items-center gap-2 text-xs font-bold cursor-pointer"
            >
              <ArrowLeft className="h-3 w-3" />
              Voltar ao início
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-green-100 selection:text-green-900 pt-10 overflow-x-hidden">
      {/* Fixed Sticky Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 py-2.5 text-center text-white shadow-lg">
        <p className="text-sm font-medium tracking-tight sm:text-base">
          Oferta válida somente até <span className="font-black text-yellow-300 uppercase">HOJE</span>, <span className="font-black text-yellow-300">{today}</span>
        </p>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden px-6 pt-12 pb-12 lg:px-8 lg:pt-20">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Social Proof Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-[11px] font-bold text-green-700 ring-1 ring-inset ring-green-600/20 sm:px-4 sm:py-1.5 sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              🔥 Mais de 127 pessoas já estão usando esse sistema hoje
            </div>

            <h1 className="text-[1.75rem] font-extrabold tracking-tight text-gray-900 leading-[1.1] sm:text-6xl lg:text-7xl">
              Pare de <span className="text-red-600">perder</span> <br className="sm:hidden" />
              <span className="text-red-600">horas</span> no Excel<br />
              tenha acesso a um <br className="sm:hidden" />
              <span className="text-green-600">sistema completo</span><br />
              com planilhas profissionais
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-gray-600">
              Organize seu financeiro, vendas, estoque e gestão em poucos minutos sem precisar criar nada do zero.
            </p>
            <div className="mt-8 mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-200">
              <img 
                src="https://picsum.photos/seed/spreadsheet-preview/1200/600" 
                alt="Sistema de Planilhas Preview" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
              {[
                "Planilhas prontas e editáveis",
                "Não precisa saber Excel",
                "Funciona no Excel e Google Planilhas",
                "Acesso imediato"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-semibold text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col items-center gap-4">
              <a 
                href="#oferta"
                className="inline-flex items-center justify-center rounded-full bg-green-600 px-8 sm:px-10 py-5 text-lg sm:text-xl font-bold text-white shadow-2xl transition-all hover:bg-green-700 hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
              >
                👉 QUERO ACESSO IMEDIATO
              </a>
              <div className="flex items-center gap-2 text-[10px] font-medium text-gray-500 sm:text-sm whitespace-nowrap">
                <Zap className="h-3 w-3 text-yellow-500 sm:h-4 sm:w-4" />
                <span>Acesso imediato liberado após a confirmação</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. QUEBRA DE DOR */}
      <section className="bg-gray-50 py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Se você ainda faz planilhas do zero… você está perdendo tempo (e dinheiro)
          </h2>
          <div className="mt-6 space-y-6 text-lg leading-8 text-gray-600">
            <p>Criar planilhas do zero é lento, confuso e frustrante.</p>
            <p>Você precisa pensar em fórmulas, organizar dados e ainda corre o risco de errar tudo.</p>
            <p className="font-semibold text-gray-900">Enquanto isso, profissionais já usam modelos prontos para acelerar tudo.</p>
          </div>
        </div>
      </section>

      {/* 3. APRESENTAÇÃO DA SOLUÇÃO */}
      <section className="py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              A solução: um sistema completo de planilhas profissionais prontas
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Você terá acesso a uma biblioteca organizada com planilhas prontas para diferentes áreas — basta baixar, editar e usar.
            </p>
          </div>

          {/* 4. O QUE VOCÊ VAI RECEBER */}
          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Controle Financeiro Completo",
                desc: "Gerencie entradas, saídas e lucros automaticamente",
                icon: BarChart3,
                color: "bg-blue-500"
              },
              {
                title: "Gestão de Estoque",
                desc: "Controle produtos, entradas e saídas sem complicação",
                icon: Package,
                color: "bg-orange-500"
              },
              {
                title: "Dashboard de Vendas",
                desc: "Acompanhe seus resultados com gráficos profissionais",
                icon: TrendingUp,
                color: "bg-green-500"
              },
              {
                title: "Gestão Empresarial",
                desc: "Organize sua operação com indicadores prontos",
                icon: Briefcase,
                color: "bg-purple-500"
              },
              {
                title: "Organização e Produtividade",
                desc: "Planeje tarefas, metas e rotina com facilidade",
                icon: Calendar,
                color: "bg-red-500"
              },
              {
                title: "Gestão de Projetos",
                desc: "Acompanhe prazos, tarefas e equipes com clareza",
                icon: LayoutGrid,
                color: "bg-teal-500"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md"
              >
                <div className={`inline-flex rounded-xl ${item.color} p-3 text-white`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
                <div className="mt-6 aspect-video overflow-hidden rounded-lg bg-gray-100">
                  <img 
                    src={`https://picsum.photos/seed/${item.title}/400/225`} 
                    alt={item.title}
                    className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BENEFÍCIOS */}
      <section className="bg-gray-900 py-16 px-6 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">O que muda na sua rotina</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-y-12 gap-x-4 lg:grid-cols-4">
            {[
              { title: "Economize horas", desc: "Poupe horas de trabalho todos os dias", icon: Clock },
              { title: "Controle total", desc: "Tenha controle total do seu negócio", icon: BarChart3 },
              { title: "Evite erros", desc: "Evite erros que geram prejuízo", icon: ShieldCheck },
              { title: "Produtividade", desc: "Aumente sua produtividade rapidamente", icon: Zap }
            ].map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-base font-bold sm:text-lg sm:mt-6">{benefit.title}</h3>
                <p className="mt-2 text-xs text-gray-400 sm:text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simples, rápido e direto</h2>
          </div>
          <div className="mt-16 relative">
            {/* Connecting Line - Positioned between icons */}
            <div className="absolute top-7 left-[15%] right-[15%] hidden h-1 bg-green-200 lg:block" />
            
            <div className="relative grid grid-cols-2 gap-y-12 gap-x-4 sm:flex sm:flex-wrap sm:justify-center sm:gap-12">
              {[
                { step: "1", title: "Pagamento 100% Seguro", icon: CreditCard },
                { step: "2", title: "Receba o Acesso Imediato", icon: Zap },
                { step: "3", title: "Escolha sua planilha", icon: MousePointer2 },
                { step: "4", title: "Comece a Lucrar Hoje", icon: Rocket }
              ].map((item, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600 sm:h-16 sm:w-16 ring-4 ring-white">
                    <item.icon className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>
                  <div className="absolute -top-1 left-1/2 translate-x-3 z-20 rounded-full bg-green-600 px-1.5 py-0.5 text-[10px] font-bold text-white sm:translate-x-8 sm:text-xs">
                    {item.step}
                  </div>
                  <div className="mt-4 h-10 flex items-start justify-center">
                    <h3 className="text-[11px] font-bold text-gray-900 sm:text-sm leading-tight max-w-[110px]">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. PROVA SOCIAL */}
      <section className="bg-gray-50 py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Veja o que estão falando</h2>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Eu perdia horas no Excel, agora resolvo tudo em minutos.",
              "Muito prático, já comecei a usar no mesmo dia.",
              "Vale muito mais do que custa."
            ].map((quote, i) => (
              <div key={i} className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 italic text-gray-600">“{quote}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-200" />
                  <p className="text-sm font-bold text-gray-900">Cliente Satisfeito</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. OFERTA & 9. PLANO PREMIUM */}
      <section id="oferta" className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Acesso completo ao sistema</h2>
            <p className="mt-4 text-lg text-gray-600">Um único sistema como esse poderia custar facilmente mais de R$97…</p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:max-w-4xl lg:mx-auto">
            {/* Basic Plan */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm flex flex-col">
              <h3 className="text-lg font-bold text-gray-900">Plano Básico</h3>
              <p className="mt-2 text-sm text-gray-500">Acesso essencial ao sistema</p>
              <div className="mt-6 flex flex-col sm:flex-row sm:items-baseline gap-1">
                <span className="text-4xl font-extrabold text-gray-900">R$10</span>
                <span className="text-sm text-gray-500">pagamento único</span>
              </div>
              <ul className="mt-8 space-y-4 flex-grow">
                {[
                  { text: "Acesso as planilhas", included: true },
                  { text: "7 dias de garantia", included: true },
                  { text: "6 meses de acesso", included: true },
                  { text: "Acesso vitalício", included: false },
                  { text: "Suporte prioritário", included: false },
                  { text: "Fórmulas Para Economizar Horas", included: false },
                  { text: "Guia: Como Ganhar Dinheiro com Planilhas", included: false },
                  { text: "4.000 Modelos para Word", included: false },
                  { text: "50.000 Slides para Power Point", included: false },
                  { text: "300 Templates Propostas Comerciais", included: false }
                ].map((item, i) => (
                  <li key={i} className={`flex items-center gap-3 text-sm ${item.included ? 'text-gray-600' : 'text-red-500 line-through opacity-60'}`}>
                    {item.included ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500" />
                    )}
                    {item.text}
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-center">
                <button 
                  onClick={() => setView('upgrade')}
                  className="w-full rounded-full bg-gray-600 py-3 font-bold text-white transition-all hover:bg-gray-700 cursor-pointer shadow-md"
                >
                  QUERO ACESSO AGORA
                </button>
                <p className="mt-4 text-xs font-bold text-gray-900 animate-bounce">
                  ESPERE! temos uma oferta mais vantajosa👇
                </p>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="relative self-start rounded-3xl bg-green-700 border-4 border-green-400 p-8 shadow-xl flex flex-col lg:scale-105 text-white">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-green-400 px-4 py-1 text-xs font-bold text-black shadow-md">
                MELHOR OPÇÃO
              </div>
              <h3 className="text-lg font-bold">Plano Premium</h3>
              <p className="mt-2 text-sm opacity-90">O sistema completo + bônus</p>
              <div className="mt-6 flex flex-col sm:flex-row sm:items-baseline gap-1">
                <span className="text-4xl font-extrabold">R$19,90</span>
                <span className="text-sm opacity-80">pagamento único</span>
              </div>
              <ul className="mt-8 space-y-4">
                {[
                  "Acesso a todas as planilhas",
                  "7 dias de garantia",
                  "Acesso vitalício",
                  "Suporte prioritário",
                  "Fórmulas Para Economizar Horas de Trabalho",
                  "Guia: Como Ganhar Dinheiro com Planilhas",
                  "4.000 Modelos para Word",
                  "50.000 Slides para Power Point",
                  "300 Templates Propostas Comerciais"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-full bg-white py-4 font-bold text-green-700 shadow-lg transition-all hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
                QUERO ACESSO PREMIUM
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. BÔNUS */}
      <section className="bg-green-50 py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">🎁 Bônus Exclusivos</h2>
            <p className="mt-4 text-lg text-gray-600">Aumente ainda mais sua produtividade com estes materiais extras</p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Templates de Documentos", icon: FileText },
              { title: "Modelos de E-mails", icon: Mail },
              { title: "Materiais de Produtividade", icon: Lightbulb },
              { title: "Guia: Como Ganhar Dinheiro com Planilhas", icon: TrendingUp },
              { title: "4.000 Modelos para Word", icon: FileText },
              { title: "50.000 Slides para Power Point", icon: Presentation }
            ].map((bonus, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow-sm flex items-center gap-4">
                <div className="rounded-lg bg-green-100 p-2 text-green-600">
                  <bonus.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-gray-900 leading-tight">{bonus.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. GARANTIA */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gray-900 p-12 text-center text-white shadow-2xl">
          <ShieldCheck className="mx-auto h-16 w-16 text-green-500" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight">Teste por 7 dias sem risco</h2>
          <p className="mt-4 text-lg text-gray-400">
            Se você não gostar ou achar que não é para você, basta pedir o reembolso. Devolvemos seu dinheiro sem perguntas.
          </p>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Perguntas Frequentes</h2>
          <div className="mt-12">
            <FAQItem 
              question="Precisa saber Excel?" 
              answer="Não! As planilhas já estão prontas com todas as fórmulas configuradas. Você só precisa preencher os dados." 
            />
            <FAQItem 
              question="Quando recebo acesso?" 
              answer="O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com o link para download." 
            />
            <FAQItem 
              question="Funciona no celular?" 
              answer="Sim! Você pode usar as planilhas no celular através do aplicativo Google Planilhas." 
            />
            <FAQItem 
              question="É pagamento único?" 
              answer="Sim, você paga apenas uma vez e tem acesso vitalício ao sistema e às atualizações." 
            />
          </div>
        </div>
      </section>

      {/* 13. CTA FINAL */}
      <section className="bg-green-600 py-24 px-6 text-center text-white lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-extrabold tracking-tight">Tenha acesso imediato ao sistema completo</h2>
          <p className="mt-6 text-xl text-green-100">
            Clique no botão abaixo e pare de perder tempo criando planilhas do zero.
          </p>
          <div className="mt-10">
            <a 
              href="#oferta"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 sm:px-10 py-5 text-lg sm:text-xl font-bold text-green-600 shadow-xl transition-all hover:bg-gray-100 hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              👉 QUERO ACESSO AO SISTEMA
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6 text-center text-sm text-gray-500">
        <p>© 2026 Sistema de Planilhas Profissionais. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
